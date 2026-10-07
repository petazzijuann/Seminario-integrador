import {Request, Response} from 'express'
import { orm } from '../shared/db/orm.js'
import { Siembra } from './siembra.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Percance } from '../percance/percance.entity.js'
import { CostoPercance } from '../costoPercance/costoPercance.entity.js'
import { parseFecha } from '../shared/fecha.js'


export class SiembraController {
  // CUU2 paso 1: lotes "En uso" de campañas abiertas, con la semilla asignada.
  async lotesDisponibles(req: Request, res: Response) {
    try {
      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { lote: { estado: 'En uso' }, campania: { estado: 'Abierta' } },
        { populate: ['lote', 'semilla', 'campania'] },
      )
      return res.status(200).json(asignaciones)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener los lotes en uso' })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const siembras = await orm.em.find(Siembra, {}, {
        populate: ['loteSemillaCampania.lote', 'loteSemillaCampania.semilla'],
      })
      return res.status(200).json(siembras)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las siembras' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const siembra = await orm.em.findOne(Siembra, { id: id }, {
        populate: ['loteSemillaCampania.lote', 'loteSemillaCampania.semilla'],
      })
      if (!siembra) {
        return res.status(404).json({ message: 'Siembra no encontrada' })
      }

      const percances = await orm.em.find(CostoPercance, { siembra: siembra }, { populate: ['percance'] })

      return res.status(200).json({ siembra, percances })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener la siembra' })
    }
  }

  // CUU2 paso 3 (+ alternativo 2.b): registra la siembra, descuenta la semilla,
  // pasa el lote a "Sembrado" y guarda los percances con su costo.
  async create(req: Request, res: Response) {
    try {
      const { loteSemillaCampaniaId, cantidadSembrada, fechaSiembra, percances = [] } = req.body

      // Semilla.stock es entero: si se aceptaran decimales Postgres redondearía el stock.
      const cantidad = Number(cantidadSembrada)
      if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return res.status(400).json({ message: 'cantidadSembrada debe ser un entero mayor a 0' })
      }

      const fecha = parseFecha(fechaSiembra)
      if (!fecha) {
        return res.status(400).json({ message: 'fechaSiembra debe tener formato yyyy-MM-dd' })
      }

      if (!Array.isArray(percances)) {
        return res.status(400).json({ message: 'percances debe ser una lista' })
      }

      for (const percance of percances) {
        if (!percance?.descripcion || isNaN(Number(percance.costo)) || Number(percance.costo) < 0) {
          return res.status(400).json({ message: 'Cada percance necesita descripcion y un costo mayor o igual a 0' })
        }
        if (!parseFecha(percance.fecha)) {
          return res.status(400).json({ message: 'La fecha de cada percance debe tener formato yyyy-MM-dd' })
        }
      }

      const loteSemillaCampania = await orm.em.findOne(
        LoteSemillaCampania,
        { id: Number(loteSemillaCampaniaId) },
        { populate: ['lote', 'semilla', 'campania'] },
      )
      if (!loteSemillaCampania) {
        return res.status(404).json({ message: 'LoteSemillaCampania no encontrado' })
      }

      const { lote, semilla, campania } = loteSemillaCampania

      if (campania.estado !== 'Abierta') {
        return res.status(409).json({ message: 'La campaña no está Abierta' })
      }

      if (lote.estado !== 'En uso') {
        return res.status(409).json({ message: 'El lote no está En uso' })
      }

      const siembraExistente = await orm.em.findOne(Siembra, { loteSemillaCampania })
      if (siembraExistente) {
        return res.status(409).json({ message: 'Ya hay una siembra registrada para este lote en la campaña' })
      }

      if (semilla.stock < cantidad) {
        return res.status(400).json({
          message: 'La cantidad a sembrar es mayor a la disponible',
          stockDisponible: semilla.stock,
        })
      }

      const siembra = orm.em.create(Siembra, {
        loteSemillaCampania,
        fechaSiembra: fecha,
        cantidadSembrada: cantidad,
      })

      for (const { descripcion, costo, fecha: fechaPercance } of percances) {
        const percance = orm.em.create(Percance, {
          descripcion,
          fechaPercance: parseFecha(fechaPercance)!,
        })
        orm.em.create(CostoPercance, { siembra, percance, costo: Number(costo) })
      }

      semilla.stock = semilla.stock - cantidad
      lote.estado = 'Sembrado'

      await orm.em.flush()
      return res.status(201).json(siembra)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al registrar la siembra' })
    }
  }
}
