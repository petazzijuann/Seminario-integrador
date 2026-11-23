import { Router } from 'express'
import { ChatController } from './chat.controller.js'

export const chatRouter = Router()
const controller = new ChatController()

chatRouter.post('/', controller.enviar.bind(controller))
