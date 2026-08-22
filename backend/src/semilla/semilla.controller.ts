import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Semilla } from './semilla.entity.js'

export class SemillaController {
  async getAll(req: Request, res: Response) {
    try {

      const todas = req.query.todas === 'true'
      const semillas = await orm.em.find(Semilla, todas ? {} : { estado: 'Activa' })

      return res.status(200).json(semillas)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener las semillas',
      })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const semilla = await orm.em.findOne(Semilla, { id: id })

      if (!semilla) {
        return res.status(404).json({
          message: 'Semilla no encontrada',
        })
      }

      return res.status(200).json(semilla)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener la semilla',
      })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { nombre, stock, estacion, precioUnitario } = req.body

      if (
        nombre === undefined ||
        stock === undefined ||
        estacion === undefined ||
        precioUnitario === undefined
      ) {
        return res.status(400).json({
          message: 'Faltan datos: nombre, stock, estacion y precioUnitario son obligatorios',
        })
      }


      const semilla = orm.em.create(Semilla, {
        nombre,
        stock,
        estacion,
        precioUnitario,
        estado: 'Activa',
      })

      await orm.em.flush()

      return res.status(201).json(semilla)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al crear la semilla',
      })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const semilla = await orm.em.findOne(Semilla, { id: id })

      if (!semilla) {
        return res.status(404).json({
          message: 'Semilla no encontrada',
        })
      }

      const { nombre, stock, estacion, precioUnitario, estado } = req.body

      if (nombre !== undefined) semilla.nombre = nombre
      if (stock !== undefined) semilla.stock = stock
      if (estacion !== undefined) semilla.estacion = estacion
      if (precioUnitario !== undefined) semilla.precioUnitario = precioUnitario

      if (estado !== undefined) {
        if (estado !== 'Activa' && estado !== 'Inactiva') {
          return res.status(400).json({
            message: "El estado debe ser 'Activa' o 'Inactiva'",
          })
        }

        semilla.estado = estado
      }

      await orm.em.flush()

      return res.status(200).json(semilla)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al actualizar la semilla',
      })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const semilla = await orm.em.findOne(Semilla, { id: id })

      if (!semilla) {
        return res.status(404).json({
          message: 'Semilla no encontrada',
        })
      }

      if (semilla.estado === 'Inactiva') {
        return res.status(200).json({
          message: 'La semilla ya estaba dada de baja',
          data: semilla,
        })
      }


      semilla.estado = 'Inactiva'

      await orm.em.flush()

      return res.status(200).json({
        message: 'Semilla dada de baja',
        data: semilla,
      })
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al dar de baja la semilla',
      })
    }
  }
}
