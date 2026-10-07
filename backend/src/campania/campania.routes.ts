import { Router } from 'express'
import { CampaniaController } from './campania.controller.js'

export const campaniasRouter = Router()
const controller = new CampaniaController()

campaniasRouter.get('/', controller.getAll.bind(controller))
campaniasRouter.get('/:id', controller.getOne.bind(controller))
campaniasRouter.post('/', controller.asignarLote.bind(controller))
campaniasRouter.patch('/:id/cerrar', controller.cerrar.bind(controller))
