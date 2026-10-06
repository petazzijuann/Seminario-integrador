import {Request, Response} from 'express'
import { orm } from '../shared/db/orm.js'
import { LoteSemillaCampania } from './loteSemillaCampania.entity.js'

export class LoteSemillaCampaniaController {
  async getOne(req: Request, res: Response) {
      try {
        const id = Number(req.params.id)
        const lote = await orm.em.findOne(LoteSemillaCampania, { id: id })
        if (!lote) {
          return res.status(404).json({ message: 'LoteSemillaCampania no encontrado' })
        }
        return res.status(200).json(lote)
      } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error al obtener el loteSemillaCampania' })
      }
    }
}