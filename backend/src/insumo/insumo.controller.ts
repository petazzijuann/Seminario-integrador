import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Insumo } from './insumo.entity.js'

export class InsumoController {

  async getAll(req: Request, res: Response) {
    try {
      const insumos = await orm.em.find(Insumo, {})

      return res.status(200).json(insumos)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener los insumos',
      })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      const insumo = await orm.em.findOne(Insumo, { id: id })

      if (!insumo) {
        return res.status(404).json({
          message: 'Insumo no encontrado',
        })
      }

      return res.status(200).json(insumo)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener el insumo',
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      const insumo = await orm.em.findOne(Insumo, { id: id })

      if (!insumo) {
        return res.status(404).json({
          message: 'Insumo no encontrado',
        })
      }

      const { stock, precioUnitario } = req.body

      if (stock !== undefined) {
        insumo.stock = stock
      }

      if (precioUnitario !== undefined) {
        insumo.precioUnitario = precioUnitario
      }

      await orm.em.flush()

      return res.status(200).json(insumo)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al actualizar el insumo',
      })
    }
  }
}