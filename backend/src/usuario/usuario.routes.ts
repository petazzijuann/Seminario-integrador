import { Router } from 'express'
import { UsuarioController } from './usuario.controller.js'
import { authenticateToken } from '../shared/auth/authenticateToken.js'
import { authorizeAdmin } from '../shared/auth/authorizeAdmin.js'

export const usuariosRouter = Router()
const controller = new UsuarioController()

usuariosRouter.post('/login', controller.login.bind(controller))

usuariosRouter.use(authenticateToken, authorizeAdmin)
usuariosRouter.get('/', controller.getAll.bind(controller))
usuariosRouter.post('/:id/reset-password', controller.resetPassword.bind(controller))
usuariosRouter.put('/:id', controller.update.bind(controller))
usuariosRouter.post('/', controller.create.bind(controller))
usuariosRouter.delete('/:id', controller.remove.bind(controller))