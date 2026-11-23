import { orm } from '../shared/db/orm.js'
import { Campania } from '../campania/campania.entity.js'
import { Cosecha } from '../cosecha/cosecha.entity.js'
import { CostoPercance } from '../costoPercance/costoPercance.entity.js'
import { DetalleConsumo } from '../detalleConsumo/detalleConsumo.entity.js'
import { DetalleMantenimiento } from '../detalleMantenimiento/detalleMantenimiento.entity.js'
import { LaborMantenimiento } from '../laborMantenimiento/laborMantenimiento.entity.js'
import { Lote } from '../lote/lote.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { calcularRinde } from '../rinde/rinde.service.js'
import { obtenerStock } from '../stock/stock.service.js'

// Consultas que puede usar el asistente: fijas y de solo lectura.
// El modelo solo elige el nombre; nunca escribe SQL ni accede a usuarios.

const USOS_MINIMOS = 2 // mismo criterio que el tablero de stock (StockPage.jsx)
const MAX_FILAS = 40

const redondear = (n: number | null, d = 2) => (n === null ? null : Math.round(n * 10 ** d) / 10 ** d)
const dividir = (a: number, b: number) => (b > 0 ? a / b : null)
const nombreCampania = (c: { id: number; fecha: string; temporada: string }) => {
  const anio = Number(String(c.fecha).slice(0, 4))
  return `C${c.id} ${anio}/${anio + 1} ${c.temporada}`
}
const recortar = <T>(filas: T[]) => (filas.length > MAX_FILAS ? { filas: filas.slice(0, MAX_FILAS), filasOmitidas: filas.length - MAX_FILAS } : { filas })

type Producto = { nombre: string; stock: number; precioUnitario: number; usos: number; consumido: number }

function conCobertura(p: Producto) {
  const promedio = p.usos > 0 ? p.consumido / p.usos : null
  const alcanza = promedio ? p.stock / promedio : null
  let situacion = 'Con stock'
  if (p.stock <= 0) situacion = 'Sin stock'
  else if (alcanza !== null && alcanza < USOS_MINIMOS) situacion = 'Stock bajo'
  else if (alcanza === null) situacion = 'Sin consumo'
  return {
    nombre: p.nombre,
    situacion,
    stock: p.stock,
    precio: p.precioUnitario,
    promedioPorUso: redondear(promedio),
    alcanzaParaUsos: alcanza === null ? null : Math.floor(alcanza),
    hayQueReponer: situacion === 'Sin stock' || situacion === 'Stock bajo',
  }
}

async function stock() {
  const { semillas, insumos } = await obtenerStock()
  const semillasActivas = semillas.filter((s) => s.estado === 'Activa').map(conCobertura)
  const insumosActivos = insumos.filter((i) => i.estado !== 'Inactiva').map(conCobertura)
  return {
    // Primero y ya filtrado: es lo que más se pregunta.
    paraReponer: {
      semillas: semillasActivas.filter((p) => p.hayQueReponer).map((p) => `${p.nombre}: ${p.situacion}, quedan ${p.stock} t`),
      insumos: insumosActivos.filter((p) => p.hayQueReponer).map((p) => `${p.nombre}: ${p.situacion}, quedan ${p.stock}`),
    },
    criterio: `Hay que reponer lo que está sin stock o alcanza para menos de ${USOS_MINIMOS} usos según el consumo promedio. Semillas en toneladas.`,
    semillas: semillasActivas,
    insumos: insumosActivos,
  }
}

async function lotes() {
  const todos = await orm.em.find(Lote, {}, { orderBy: { nroLote: 'asc' } })
  const abiertas = await orm.em.find(LoteSemillaCampania, { campania: { estado: 'Abierta' } }, { populate: ['semilla', 'campania'] })
  return recortar(
    todos.map((l) => ({
      nroLote: l.nroLote,
      estado: l.estado,
      superficieHa: Number(l.superficie),
      zona: l.zona,
      enCampaniaAbierta: abiertas.filter((a) => a.lote.id === l.id).map((a) => ({ campania: nombreCampania(a.campania), cultivo: a.semilla.nombre })),
    })),
  )
}

async function campanias() {
  const todas = await orm.em.find(Campania, {}, { orderBy: { fecha: 'desc' } })
  const asignaciones = await orm.em.find(LoteSemillaCampania, {}, { populate: ['lote', 'semilla'] })
  return recortar(
    todas.map((c) => ({
      campania: nombreCampania(c),
      inicio: c.fecha,
      estado: c.estado,
      lotes: asignaciones
        .filter((a) => a.campania.id === c.id)
        .map((a) => ({ nroLote: a.lote.nroLote, cultivo: a.semilla.nombre, estadoLote: a.lote.estado })),
    })),
  )
}

// Lo registrado en las campañas: siembras, labores con sus insumos, cosechas y percances.
async function actividad() {
  const asignaciones = await orm.em.find(LoteSemillaCampania, {}, { populate: ['lote', 'semilla', 'campania'] })
  const siembras = await orm.em.find(Siembra, {})
  const cosechas = await orm.em.find(Cosecha, {})
  const percances = await orm.em.find(CostoPercance, {}, { populate: ['percance'] })
  const labores = await orm.em.find(DetalleMantenimiento, {}, { populate: ['labor'], orderBy: { fecha: 'desc' } })
  const consumos = await orm.em.find(DetalleConsumo, {}, { populate: ['insumo'] })

  // Primero las campañas más nuevas, por si hay que recortar.
  const ordenadas = [...asignaciones].sort((a, b) => String(b.campania.fecha).localeCompare(String(a.campania.fecha)))
  return recortar(
    ordenadas.map((a) => {
      const siembra = siembras.find((s) => s.loteSemillaCampania.id === a.id)
      const cosecha = siembra && cosechas.find((c) => c.siembra.id === siembra.id)
      return {
        campania: nombreCampania(a.campania),
        estadoCampania: a.campania.estado,
        nroLote: a.lote.nroLote,
        cultivo: a.semilla.nombre,
        siembra: siembra ? { fecha: siembra.fechaSiembra, toneladas: siembra.cantidadSembrada } : 'sin registrar',
        labores: labores
          .filter((l) => l.loteSemillaCampania.id === a.id)
          .map((l) => ({
            labor: l.labor.descripcion,
            fecha: l.fecha,
            insumos: consumos
              .filter((c) => c.detalleMantenimiento.id === l.id)
              .map((c) => ({ insumo: c.insumo.nombre, cantidad: c.cantidadUtilizada, costo: c.costo })),
          })),
        cosecha: cosecha ? { fecha: cosecha.fechaCosecha, kgPorHa: cosecha.kilosHectarea, humedad: cosecha.porcentajeHumedad } : 'sin registrar',
        percances: siembra
          ? percances
              .filter((p) => p.siembra.id === siembra.id)
              .map((p) => ({ descripcion: p.percance.descripcion, fecha: p.percance.fechaPercance, costo: p.costo }))
          : [],
      }
    }),
  )
}

// Resultados de las campañas cerradas, con las mismas cuentas que el tablero (utils/rinde.js del front).
async function rinde() {
  const filas = await calcularRinde()
  const grupos = new Map<number, typeof filas>()
  for (const f of filas) grupos.set(f.campania.id, [...(grupos.get(f.campania.id) ?? []), f])

  const resumen = [...grupos.values()]
    .sort((a, b) => String(b[0].campania.fecha).localeCompare(String(a[0].campania.fecha)))
    .map((g) => {
      const costos = { semilla: 0, labores: 0, insumos: 0, percances: 0, total: 0 }
      const superficies = new Map<number, number>() // con doble cultivo el lote se cuenta una vez
      let produccionKg = 0
      let cosechadas = 0
      let sembrado = 0
      let humedadPorKg = 0
      for (const f of g) {
        superficies.set(f.lote.id, f.lote.superficie)
        produccionKg += f.produccionKg
        sembrado += f.cantidadSembrada
        if (f.kilosHectarea !== null) cosechadas += f.lote.superficie
        if (f.porcentajeHumedad !== null) humedadPorKg += f.porcentajeHumedad * f.produccionKg
        for (const k of Object.keys(costos) as (keyof typeof costos)[]) costos[k] += f.costos[k]
      }
      const superficie = [...superficies.values()].reduce((t, s) => t + s, 0)
      return {
        campania: nombreCampania(g[0].campania),
        lotes: [...new Set(g.map((f) => f.lote.nroLote))],
        cultivos: [...new Set(g.map((f) => f.semilla.nombre))],
        superficieHa: superficie,
        produccionT: redondear(produccionKg / 1000),
        rindeKgPorHa: redondear(dividir(produccionKg, cosechadas), 0),
        humedadPromedio: redondear(dividir(humedadPorKg, produccionKg), 1),
        costos,
        costoPorHa: redondear(dividir(costos.total, superficie), 0),
        costoPorTonelada: redondear(dividir(costos.total, produccionKg / 1000), 0),
        toneladasSembradas: sembrado,
      }
    })
  return { aclaracion: 'Solo campañas cerradas. El sistema no registra precios de venta: no hay ingresos ni ganancias.', ...recortar(resumen) }
}

async function catalogoLabores() {
  const labores = await orm.em.find(LaborMantenimiento, {})
  return recortar(labores.map((l) => ({ labor: l.descripcion, costoBase: l.costeBase, estado: l.estado })))
}

export const CONSULTAS: Record<string, { descripcion: string; ejecutar: () => Promise<unknown> }> = {
  stock: { descripcion: 'stock, precio y cobertura de semillas e insumos; qué falta comprar o reponer', ejecutar: stock },
  lotes: { descripcion: 'lotes con su estado (Libre, En uso, Sembrado, Cosechado), superficie, zona y cultivo actual', ejecutar: lotes },
  campanias: { descripcion: 'campañas abiertas y cerradas, con sus lotes y cultivos', ejecutar: campanias },
  actividad: { descripcion: 'siembras, labores con insumos usados, cosechas y percances de cada lote y campaña', ejecutar: actividad },
  rinde: { descripcion: 'producción, rinde, humedad y costos de las campañas cerradas', ejecutar: rinde },
  catalogo_labores: { descripcion: 'labores de mantenimiento disponibles y su costo base', ejecutar: catalogoLabores },
}
