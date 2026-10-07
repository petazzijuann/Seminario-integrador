import { Router } from 'express'
import { LaborMantenimientoController } from './laborMantenimiento.controller.js'

export const laboresRouter = Router()
const controller = new LaborMantenimientoController()

laboresRouter.get('/', controller.getAll.bind(controller))
laboresRouter.get('/:id', controller.getOne.bind(controller))
laboresRouter.post('/', controller.create.bind(controller))
laboresRouter.put('/:id', controller.update.bind(controller))
