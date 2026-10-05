import { Router } from 'express'
import { CampaniaController } from './campania.controller.js'

export const campaniasRouter = Router()
const controller = new CampaniaController()

campaniasRouter.post('/', controller.asignarLote.bind(controller))
