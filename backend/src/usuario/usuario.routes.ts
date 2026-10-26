import { Router } from 'express'
import { UsuarioController } from './usuario.controller.js'

export const usuariosRouter = Router()
const controller = new UsuarioController()

usuariosRouter.get('/', controller.getAll.bind(controller))
usuariosRouter.put('/:id', controller.update.bind(controller))
usuariosRouter.post('/', controller.create.bind(controller))
usuariosRouter.delete('/:id', controller.remove.bind(controller))
usuariosRouter.post('/login', controller.login.bind(controller))