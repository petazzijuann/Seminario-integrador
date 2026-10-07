import { Router } from 'express'
import { DetalleMantenimientoController } from './detalleMantenimiento.controller.js'

export const mantenimientosRouter = Router()
const controller = new DetalleMantenimientoController()

mantenimientosRouter.get('/lotes-disponibles', controller.lotesDisponibles.bind(controller))
mantenimientosRouter.get('/', controller.getAll.bind(controller))
mantenimientosRouter.get('/:id', controller.getOne.bind(controller))
mantenimientosRouter.post('/', controller.create.bind(controller))
