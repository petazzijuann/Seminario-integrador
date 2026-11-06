import type { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { getJwtSecret } from './jwt.js'

interface AuthenticatedUser extends jwt.JwtPayload {
  id: number
  email: string
  roleId: number
}

const isAuthenticatedUser = (payload: string | jwt.JwtPayload): payload is AuthenticatedUser =>
  typeof payload === 'object' &&
  typeof payload.id === 'number' &&
  typeof payload.email === 'string' &&
  typeof payload.roleId === 'number'

export const authenticateToken: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization
  const [scheme, token, ...extra] = authorization?.split(' ') ?? []

  if (scheme !== 'Bearer' || !token || extra.length > 0) {
    return res.status(401).json({ message: 'Token de autenticación requerido' })
  }

  let secret: string
  try {
    secret = getJwtSecret()
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error de configuración de autenticación' })
  }

  try {
    const payload = jwt.verify(token, secret, { algorithms: ['HS256'] })
    if (!isAuthenticatedUser(payload)) {
      return res.status(401).json({ message: 'Token de autenticación inválido' })
    }
    res.locals.authenticatedUser = payload
  } catch {
    return res.status(401).json({ message: 'Token de autenticación inválido o expirado' })
  }

  return next()
}
