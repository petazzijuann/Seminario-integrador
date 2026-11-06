import type { RequestHandler } from 'express'

export const authorizeOperationalAccess: RequestHandler = (req, res, next) => {
  const roleId: unknown = res.locals.authenticatedUser?.roleId

  if (roleId === 1 || roleId === 2 || (roleId === 3 && req.method === 'GET')) {
    return next()
  }

  return res.status(403).json({ message: 'No tenés permisos para realizar esta operación' })
}
