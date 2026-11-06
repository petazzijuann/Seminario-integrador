import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { LaborMantenimiento } from './laborMantenimiento.entity.js'

// Catálogo de labores predefinidas ("Aplicar herbicida", "Aplicar fertilizante", ...).
export class LaborMantenimientoController {
  async getAll(req: Request, res: Response) {
    try {
      const todas = req.query.todas === 'true'
      const labores = await orm.em.find(LaborMantenimiento, todas ? {} : { estado: 'Activa' })
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

      if (typeof descripcion !== 'string' || !descripcion.trim() || !Number.isFinite(Number(costeBase)) || Number(costeBase) < 0) {
        return res.status(400).json({ message: 'descripcion y costeBase (mayor o igual a 0) son obligatorios' })
      }

      const labor = orm.em.create(LaborMantenimiento, {
        descripcion: descripcion.trim(),
        costeBase: Number(costeBase),
        estado: 'Activa',
      })

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

      const { descripcion, costeBase, estado } = req.body

      if (descripcion !== undefined) {
        if (typeof descripcion !== 'string' || !descripcion.trim()) {
          return res.status(400).json({ message: 'descripcion no puede estar vacía' })
        }
        labor.descripcion = descripcion.trim()
      }

      if (costeBase !== undefined) {
        if (!Number.isFinite(Number(costeBase)) || Number(costeBase) < 0) {
          return res.status(400).json({ message: 'costeBase debe ser un número mayor o igual a 0' })
        }
        labor.costeBase = Number(costeBase)
      }

      if (estado !== undefined) {
        if (estado !== 'Activa' && estado !== 'Inactiva') {
          return res.status(400).json({ message: "El estado debe ser 'Activa' o 'Inactiva'" })
        }
        labor.estado = estado
      }

      await orm.em.flush()
      return res.status(200).json(labor)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al actualizar la labor' })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const labor = await orm.em.findOne(LaborMantenimiento, { id })
      if (!labor) {
        return res.status(404).json({ message: 'Labor no encontrada' })
      }

      if (labor.estado === 'Inactiva') {
        return res.status(200).json({
          message: 'La labor ya estaba dada de baja',
          data: labor,
        })
      }

      labor.estado = 'Inactiva'

      await orm.em.flush()
      return res.status(200).json({
        message: 'Labor dada de baja',
        data: labor,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al dar de baja la labor' })
    }
  }
}
