import { Router } from 'express'
import { RolController } from './rol.controller.js'

export const rolesRouter = Router()
const controller = new RolController()

rolesRouter.get('/', controller.getAll.bind(controller))
rolesRouter.get('/:id', controller.getOne.bind(controller))