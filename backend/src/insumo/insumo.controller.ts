import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Insumo } from './insumo.entity.js'

export class InsumoController {
  async getAll(req: Request, res: Response) {
    try {
      const todos = req.query.todas === 'true'
      const insumos = await orm.em.find(Insumo, todos ? {} : { estado: 'Activa' })

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

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

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

  async create(req: Request, res: Response) {
    try {
      const { nombre, stock, precioUnitario } = req.body

      if (nombre === undefined || stock === undefined || precioUnitario === undefined) {
        return res.status(400).json({
          message: 'Faltan datos: nombre, stock y precioUnitario son obligatorios',
        })
      }

      const insumo = orm.em.create(Insumo, {
        nombre,
        stock,
        precioUnitario,
        estado: 'Activa',
      })

      await orm.em.flush()

      return res.status(201).json(insumo)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al crear el insumo',
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const insumo = await orm.em.findOne(Insumo, { id: id })

      if (!insumo) {
        return res.status(404).json({
          message: 'Insumo no encontrado',
        })
      }

      const { nombre, stock, precioUnitario, estado } = req.body

      if (nombre !== undefined) insumo.nombre = nombre
      if (stock !== undefined) {
        insumo.stock = stock
      }

      if (precioUnitario !== undefined) {
        insumo.precioUnitario = precioUnitario
      }

      if (estado !== undefined) {
        if (estado !== 'Activa' && estado !== 'Inactiva') {
          return res.status(400).json({
            message: "El estado debe ser 'Activa' o 'Inactiva'",
          })
        }

        insumo.estado = estado
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

  async agregarStock(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const cantidad = Number(req.body.cantidad)
      if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return res.status(400).json({ message: 'cantidad debe ser un entero mayor a 0' })
      }

      const insumo = await orm.em.findOne(Insumo, { id: id })

      if (!insumo) {
        return res.status(404).json({
          message: 'Insumo no encontrado',
        })
      }

      insumo.stock = insumo.stock + cantidad

      await orm.em.flush()

      return res.status(200).json(insumo)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al agregar stock al insumo',
      })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const insumo = await orm.em.findOne(Insumo, { id: id })

      if (!insumo) {
        return res.status(404).json({
          message: 'Insumo no encontrado',
        })
      }

      if (insumo.estado === 'Inactiva') {
        return res.status(200).json({
          message: 'El insumo ya estaba dado de baja',
          data: insumo,
        })
      }

      insumo.estado = 'Inactiva'

      await orm.em.flush()

      return res.status(200).json({
        message: 'Insumo dado de baja',
        data: insumo,
      })
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al dar de baja el insumo',
      })
    }
  }
}