import {Request, Response} from 'express'
import { orm } from '../shared/db/orm.js'
import { Lote, ESTADOS_LOTE } from './lote.entity.js'

export class LoteController {
  async getAll(req: Request, res: Response) {
    try {
      const lotes = await orm.em.find(Lote, {})
      return res.status(200).json(lotes)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener los lotes' })
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const lote = await orm.em.findOne(Lote, { id: id })
      if (!lote) {
        return res.status(404).json({ message: 'Lote no encontrado' })
      }
      return res.status(200).json(lote)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener el lote' })
    }
  }
  async create(req: Request, res: Response) {
    try {
      const { nroLote, superficie, distanciaSurcos, zona } = req.body

      // Un lote nuevo siempre arranca Libre, el estado no se toma del body.
      const lote = orm.em.create(Lote, {
        nroLote,
        superficie,
        distanciaSurcos,
        zona,
        estado: 'Libre',
      })

      await orm.em.flush()
      return res.status(201).json(lote)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al crear el lote' })
    }
  }
    async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const lote = await orm.em.findOne(Lote, { id: id })

      if (!lote) {
        return res.status(404).json({ message: 'Lote no encontrado' })
      }

      const { superficie, distanciaSurcos, estado, zona } = req.body

      if (superficie !== undefined) lote.superficie = superficie
      if (distanciaSurcos !== undefined) lote.distanciaSurcos = distanciaSurcos
      if (zona !== undefined) lote.zona = zona

      if (estado !== undefined) {
        if (!ESTADOS_LOTE.includes(estado)) {
          return res.status(400).json({
            message: `El estado debe ser uno de: ${ESTADOS_LOTE.join(', ')}`,
          })
        }

        lote.estado = estado
      }

      await orm.em.flush()
      return res.status(200).json(lote)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al actualizar el lote' })
    }
  }
    async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const lote = await orm.em.findOne(Lote, { id: id })

      if (!lote) {
        return res.status(404).json({ message: 'Lote no encontrado' })
      }

      orm.em.remove(lote)
      await orm.em.flush()
      return res.status(200).json({ message: 'Lote eliminado' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al eliminar el lote' })
    }
  }
}