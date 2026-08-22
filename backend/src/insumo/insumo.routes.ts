import { Router } from 'express'
import { InsumoController } from './insumo.controller.js'

export const insumosRouter = Router()
const controller = new InsumoController()

insumosRouter.get('/', controller.getAll.bind(controller))
insumosRouter.get('/:id', controller.getOne.bind(controller))
insumosRouter.put('/:id', controller.update.bind(controller))