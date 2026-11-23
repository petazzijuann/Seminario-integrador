// Cliente mínimo de Groq (API compatible con OpenAI). La clave vive solo en el servidor: GROQ_API_KEY.

const URL_GROQ = 'https://api.groq.com/openai/v1/chat/completions'
const ESPERA_MS = 20_000

export const MODELO_RESPUESTA = process.env.GROQ_MODELO_RESPUESTA ?? 'openai/gpt-oss-120b'
export const MODELO_VERIFICACION = process.env.GROQ_MODELO_VERIFICACION ?? 'openai/gpt-oss-20b'

export interface Mensaje {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export class GroqError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status // 0 = sin conexión o tiempo agotado; 429 = cupo agotado
  }
}

export const groqConfigurado = () => Boolean(process.env.GROQ_API_KEY)

interface Opciones {
  esquema?: object
  razonamiento?: 'low' | 'medium'
}

export async function pedirAGroq(modelo: string, messages: Mensaje[], maxTokens: number, opciones: Opciones = {}): Promise<string> {
  const { esquema, razonamiento = 'low' } = opciones
  let respuesta: Response
  let datos: any
  try {
    respuesta = await fetch(URL_GROQ, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify({
        model: modelo,
        messages,
        temperature: 0.2,
        max_completion_tokens: maxTokens,
        reasoning_effort: razonamiento,
        include_reasoning: false,
        ...(esquema && { response_format: { type: 'json_schema', json_schema: { name: 'salida', strict: true, schema: esquema } } }),
      }),
      signal: AbortSignal.timeout(ESPERA_MS),
    })
    datos = await respuesta.json()
  } catch (error) {
    throw new GroqError(0, error instanceof Error ? error.message : 'sin conexión')
  }

  if (!respuesta.ok) throw new GroqError(respuesta.status, String(datos?.error?.message ?? respuesta.status))

  const contenido = datos?.choices?.[0]?.message?.content
  if (typeof contenido !== 'string' || !contenido.trim()) throw new GroqError(502, 'respuesta vacía')
  return contenido.trim()
}
