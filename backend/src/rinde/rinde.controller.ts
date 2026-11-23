import { Request, Response } from 'express'
import { calcularRinde } from './rinde.service.js'

export class RindeController {
  async getAll(req: Request, res: Response) {
    try {
      return res.status(200).json(await calcularRinde())
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al calcular el rinde de las campañas' })
    }
  }
}
