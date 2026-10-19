import { Router } from 'express'
import { StockController } from './stock.controller.js'

export const stockRouter = Router()
const controller = new StockController()

stockRouter.get('/', controller.getAll.bind(controller))
