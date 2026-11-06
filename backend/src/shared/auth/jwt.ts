import jwt from 'jsonwebtoken'

export const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT_SECRET no está configurado')
  }

  return secret
}
