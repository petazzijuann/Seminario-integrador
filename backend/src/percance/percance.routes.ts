import { Router } from 'express'
import { PercanceController } from './percance.controller.js'

export const percancesRouter = Router()
const controller = new PercanceController()

percancesRouter.get('/siembras-disponibles', controller.siembrasDisponibles.bind(controller))
percancesRouter.post('/', controller.create.bind(controller))
