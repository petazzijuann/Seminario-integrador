import { Router } from 'express'
import { CosechaController } from './cosecha.controller.js'

export const cosechasRouter = Router()
const controller = new CosechaController()

cosechasRouter.get('/lotes-disponibles', controller.lotesDisponibles.bind(controller))
cosechasRouter.get('/', controller.getAll.bind(controller))
cosechasRouter.get('/:id', controller.getOne.bind(controller))
cosechasRouter.post('/', controller.create.bind(controller))
