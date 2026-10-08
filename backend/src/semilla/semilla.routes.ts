import {Router} from 'express'
import {SemillaController} from './semilla.controller.js'

export const semillaRouter = Router()
export const controller = new SemillaController()

semillaRouter.get('/', controller.getAll.bind(controller))
semillaRouter.get('/:id', controller.getOne.bind(controller))
semillaRouter.put('/:id', controller.update.bind(controller))
semillaRouter.patch('/:id/stock', controller.agregarStock.bind(controller))
semillaRouter.post('/', controller.create.bind(controller))
semillaRouter.delete('/:id', controller.delete.bind(controller))