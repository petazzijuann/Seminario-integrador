import { GRAFO } from './grafo.js'

export interface Fragmento {
  id: number
  fuente: string
  titulo: string
  texto: string
  peso: number
  conceptos: Record<string, number>
  ruta?: string // solo la guía de pantallas
}

export interface Grafo {
  fragmentos: Fragmento[]
  pantallas: Record<string, string> // ruta -> nombre
  conceptos: Record<string, { nombre: string; alias: string[]; vecinos: string[] }>
}

// Búsqueda en el grafo: relevancia por palabras (BM25) más cercanía por conceptos.
// El índice se arma una sola vez por proceso.

const MAX_FRAGMENTOS = 6
const MAX_CARACTERES = 4200
const VACIAS = new Set(
  'a al algo algun alguna ante como con cual cuales cuando de del desde donde el ella en entre es esa ese esta este esto estan fue ha hay la las le lo los me mi muy no o para pero por porque puede puedo que se ser si sin sobre son su sus te tengo tiene un una uno y ya yo hago hacer quiero'.split(
    ' ',
  ),
)

export const normalizar = (texto: string) => texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Raíz aproximada: alcanza para juntar plurales y conjugaciones frecuentes.
const VERBO = /^(cre|carg|elimin|borr|modific|registr|asign|cambi|agreg|reactiv)(o|a|as|an|ar|e|es|en|amos)$/
const raiz = (p: string) => VERBO.exec(p)?.[1] ?? base(p).replace(/^siembr/, 'sembr').replace(/^cierr/, 'cerr')
const base = (p: string) => (p.length > 5 ? p.replace(/(ciones|cion|ando|iendo|ados|adas|ado|ada|ar|er|ir|es|s|o|a|e)$/, '') : p.replace(/s$/, ''))

const palabras = (texto: string) =>
  normalizar(texto)
    .split(/[^a-z0-9]+/)
    .filter((p) => p.length > 1 && !VACIAS.has(p))
    .map(raiz)

const documentos = GRAFO.fragmentos.map((f) => {
  const frecuencia = new Map<string, number>()
  // El título pesa el doble que el cuerpo.
  const lista = [...palabras(f.fuente), ...palabras(f.titulo), ...palabras(f.titulo), ...palabras(f.texto)]
  for (const p of lista) frecuencia.set(p, (frecuencia.get(p) ?? 0) + 1)
  return { frecuencia, largo: lista.length }
})
const largoMedio = documentos.reduce((t, d) => t + d.largo, 0) / documentos.length
const aparece = new Map<string, number>()
for (const d of documentos) for (const p of d.frecuencia.keys()) aparece.set(p, (aparece.get(p) ?? 0) + 1)

function bm25(consulta: string[], i: number) {
  const { frecuencia, largo } = documentos[i]
  let total = 0
  for (const p of consulta) {
    const f = frecuencia.get(p)
    if (!f) continue
    const n = aparece.get(p)!
    const idf = Math.log(1 + (documentos.length - n + 0.5) / (n + 0.5))
    total += (idf * f * 2.2) / (f + 1.2 * (0.25 + (0.75 * largo) / largoMedio))
  }
  return total
}

// Conceptos nombrados en la pregunta (peso 1) y sus vecinos en el grafo (peso 0,4).
function conceptosDe(pregunta: string) {
  const texto = ` ${normalizar(pregunta).replace(/[^a-z0-9]+/g, ' ')} `
  const pesos = new Map<string, number>()
  for (const [id, c] of Object.entries(GRAFO.conceptos)) {
    if (c.alias.some((a) => texto.includes(` ${a.replace(/[^a-z0-9]+/g, ' ').trim()} `))) pesos.set(id, 1)
  }
  for (const id of [...pesos.keys()]) {
    for (const v of GRAFO.conceptos[id].vecinos) if (!pesos.has(v)) pesos.set(v, 0.4)
  }
  return pesos
}

function mejorFragmentoCon(palabra: string, consulta: string[]) {
  let mejor: Fragmento | null = null
  let puntos = 0
  GRAFO.fragmentos.forEach((f, i) => {
    if (!documentos[i].frecuencia.has(palabra)) return
    const p = (bm25([palabra], i) + bm25(consulta, i)) * f.peso
    if (p > puntos) [mejor, puntos] = [f, p]
  })
  return mejor as Fragmento | null
}

const capitulo = (f: Fragmento) => `${f.fuente}|${f.titulo.split(' > ')[0]}`

// Nombre de la pantalla donde está el usuario, si la ruta es una de las conocidas.
export const nombrePantalla = (ruta: unknown) => (typeof ruta === 'string' && Object.keys(GRAFO.pantallas).includes(ruta) ? GRAFO.pantallas[ruta] : null)

const HABLA_DE_LA_PANTALLA = /\b(aca|aqui|esta pantalla|este boton|esta seccion|esta tabla|este campo|esto)\b/

// `ruta`: pantalla actual. Suma a sus fragmentos, y mucho más si la pregunta habla de "acá" o "esta pantalla".
export function buscarFragmentos(pregunta: string, ruta: string | null = null) {
  const bonoRuta = HABLA_DE_LA_PANTALLA.test(normalizar(pregunta)) ? 12 : 1.5
  const consulta = [...new Set(palabras(pregunta))]
  const conceptos = conceptosDe(pregunta)

  const iniciales = GRAFO.fragmentos
    .map((f, i) => {
      let afinidad = 0
      for (const [id, peso] of conceptos) {
        const veces = f.conceptos[id]
        if (veces) afinidad += peso * Math.min(1, veces / 3) * Math.log(1 + GRAFO.fragmentos.length / (1 + frecuenciaConcepto.get(id)!))
      }
      return { f, puntos: (bm25(consulta, i) + 0.8 * afinidad) * f.peso }
    })

  // Las secciones de un mismo capítulo son vecinas: así llegan juntos todos los pasos de una tarea.
  const mejorDelCapitulo = new Map<string, number>()
  for (const { f, puntos } of iniciales) mejorDelCapitulo.set(capitulo(f), Math.max(mejorDelCapitulo.get(capitulo(f)) ?? 0, puntos))

  const puntuados = iniciales
    .map(({ f, puntos }) => ({ f, puntos: puntos + 0.35 * mejorDelCapitulo.get(capitulo(f))! + (ruta && f.ruta === ruta ? bonoRuta : 0) }))
    .filter((x) => x.puntos > 1)
    .sort((a, b) => b.puntos - a.puntos)

  // La palabra más rara de la pregunta (ej.: "soja") asegura su mejor fragmento, aunque otro capítulo sume más.
  const rara = consulta.filter((p) => aparece.has(p)).sort((a, b) => aparece.get(a)! - aparece.get(b)!)[0]
  const mejorRaro = rara && mejorFragmentoCon(rara, consulta)
  if (mejorRaro) puntuados.unshift({ f: mejorRaro, puntos: Infinity })

  const elegidos: Fragmento[] = []
  let caracteres = 0
  for (const { f } of puntuados) {
    if (elegidos.length >= MAX_FRAGMENTOS) break
    if (elegidos.includes(f) || caracteres + f.texto.length > MAX_CARACTERES) continue
    elegidos.push(f)
    caracteres += f.texto.length
  }
  return elegidos.sort((a, b) => a.id - b.id) // en el orden del documento, para que los pasos queden seguidos
}

const frecuenciaConcepto = new Map<string, number>(Object.keys(GRAFO.conceptos).map((id) => [id, GRAFO.fragmentos.filter((f) => f.conceptos[id]).length]))
