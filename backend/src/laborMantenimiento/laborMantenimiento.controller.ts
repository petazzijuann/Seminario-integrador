import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { LaborMantenimiento } from './laborMantenimiento.entity.js'

// Catálogo de labores predefinidas ("Aplicar herbicida", "Aplicar fertilizante", ...).
export class LaborMantenimientoController {
  async getAll(req: Request, res: Response) {
    try {
      const labores = await orm.em.find(LaborMantenimiento, {})
      return res.status(200).json(labores)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las labores' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const labor = await orm.em.findOne(LaborMantenimiento, { id: id })
      if (!labor) {
        return res.status(404).json({ message: 'Labor no encontrada' })
      }

      return res.status(200).json(labor)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener la labor' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { descripcion, costeBase } = req.body

      if (!descripcion || isNaN(Number(costeBase)) || Number(costeBase) < 0) {
        return res.status(400).json({ message: 'descripcion y costeBase (mayor o igual a 0) son obligatorios' })
      }

      const labor = orm.em.create(LaborMantenimiento, { descripcion, costeBase: Number(costeBase) })

      await orm.em.flush()
      return res.status(201).json(labor)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al crear la labor' })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const labor = await orm.em.findOne(LaborMantenimiento, { id: id })
      if (!labor) {
        return res.status(404).json({ message: 'Labor no encontrada' })
      }

      const { descripcion, costeBase } = req.body

      if (descripcion !== undefined) labor.descripcion = descripcion

      if (costeBase !== undefined) {
        if (isNaN(Number(costeBase)) || Number(costeBase) < 0) {
          return res.status(400).json({ message: 'costeBase debe ser un número mayor o igual a 0' })
        }
        labor.costeBase = Number(costeBase)
      }

      await orm.em.flush()
      return res.status(200).json(labor)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al actualizar la labor' })
    }
  }
}
