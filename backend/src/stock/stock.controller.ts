import { Request, Response } from 'express'
import { obtenerStock } from './stock.service.js'

export class StockController {
  async getAll(req: Request, res: Response) {
    try {
      return res.status(200).json(await obtenerStock())
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener el stock' })
    }
  }
}
