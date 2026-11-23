import type { RequestHandler } from 'express'

// Cualquier rol del sistema, también Productor. Solo para rutas que no modifican datos (ej.: el asistente).
export const authorizeAnyRole: RequestHandler = (_req, res, next) => {
  const roleId: unknown = res.locals.authenticatedUser?.roleId

  if (roleId === 1 || roleId === 2 || roleId === 3) {
    return next()
  }

  return res.status(403).json({ message: 'No tenés permisos para realizar esta operación' })
}
