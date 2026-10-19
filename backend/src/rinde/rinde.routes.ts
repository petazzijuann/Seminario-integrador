import { Router } from 'express'
import { RindeController } from './rinde.controller.js'

export const rindeRouter = Router()
const controller = new RindeController()

rindeRouter.get('/', controller.getAll.bind(controller))
