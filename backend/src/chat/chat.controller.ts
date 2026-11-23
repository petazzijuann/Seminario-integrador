import { Request, Response } from 'express'
import { responder, type Turno } from './chat.service.js'
import { GroqError, groqConfigurado } from './groq.js'

const MAX_MENSAJE = 500
const MAX_TURNO = 1200
const MAX_HISTORIAL = 6
const MAX_POR_MINUTO = 8

// Límite por usuario. Vive en memoria (en Vercel, por instancia): frena el abuso, no es un contador exacto.
const usos = new Map<number, number[]>()

function superaLimite(usuarioId: number) {
  const ahora = Date.now()
  const recientes = (usos.get(usuarioId) ?? []).filter((t) => ahora - t < 60_000)
  if (recientes.length >= MAX_POR_MINUTO) return true
  usos.set(usuarioId, [...recientes, ahora])
  return false
}

const esTurno = (t: any): t is Turno => (t?.role === 'user' || t?.role === 'assistant') && typeof t.content === 'string'

export class ChatController {
  // POST /api/chat  { message, history?: [{ role: 'user' | 'assistant', content }], route?: pantalla actual }  ->  { reply }
  // La conversación no se guarda: el front manda los últimos turnos para dar contexto.
  async enviar(req: Request, res: Response) {
    try {
      const { message, history = [], route } = req.body ?? {}

      if (typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ message: 'El mensaje es obligatorio' })
      }
      if (message.length > MAX_MENSAJE) {
        return res.status(400).json({ message: `El mensaje no puede superar los ${MAX_MENSAJE} caracteres` })
      }
      if (!Array.isArray(history)) {
        return res.status(400).json({ message: 'history debe ser una lista' })
      }
      if (!groqConfigurado()) {
        return res.status(503).json({ message: 'El asistente no está configurado' })
      }

      const usuario = res.locals.authenticatedUser
      if (superaLimite(usuario.id)) {
        return res.status(429).json({ message: 'Enviaste muchos mensajes seguidos. Esperá un minuto y volvé a intentar.' })
      }

      const historial = history
        .filter(esTurno)
        .slice(-MAX_HISTORIAL)
        .map((t) => ({ role: t.role, content: t.content.slice(0, MAX_TURNO) }))

      const reply = await responder(message.trim(), historial, usuario.roleId, typeof route === 'string' ? route : null)
      return res.status(200).json({ reply })
    } catch (error) {
      console.error(error)
      if (error instanceof GroqError && error.status === 429) {
        return res.status(429).json({ message: 'El asistente llegó a su límite de consultas. Probá de nuevo en unos minutos.' })
      }
      return res.status(502).json({ message: 'El asistente no pudo responder. Probá de nuevo.' })
    }
  }
}
