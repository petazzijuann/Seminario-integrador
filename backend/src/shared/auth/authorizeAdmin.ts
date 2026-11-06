import type { RequestHandler } from 'express'

export const authorizeAdmin: RequestHandler = (_req, res, next) => {
  if (res.locals.authenticatedUser?.roleId === 1) {
    return next()
  }

  return res.status(403).json({ message: 'Solo el administrador puede gestionar usuarios' })
}
