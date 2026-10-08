import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Cosecha } from './cosecha.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { parseFecha } from '../shared/fecha.js'

export class CosechaController {
  // CUU4 pasos 1 y 2: lotes "Sembrado" de campañas abiertas, con la semilla y la cantidad sembrada.
  // Si la lista viene vacía es el alternativo 1.a (no hay lotes para cosechar).
  async lotesDisponibles(req: Request, res: Response) {
    try {
      const siembras = await orm.em.find(
        Siembra,
        { loteSemillaCampania: { lote: { estado: 'Sembrado' }, campania: { estado: 'Abierta' } } },
        { populate: ['loteSemillaCampania.lote', 'loteSemillaCampania.semilla', 'loteSemillaCampania.campania'] },
      )
      return res.status(200).json(siembras)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener los lotes para cosechar' })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const cosechas = await orm.em.find(Cosecha, {}, {
        populate: ['siembra.loteSemillaCampania.lote', 'siembra.loteSemillaCampania.semilla'],
      })
      return res.status(200).json(cosechas)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las cosechas' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const cosecha = await orm.em.findOne(Cosecha, { id: id }, {
        populate: ['siembra.loteSemillaCampania.lote', 'siembra.loteSemillaCampania.semilla'],
      })
      if (!cosecha) {
        return res.status(404).json({ message: 'Cosecha no encontrada' })
      }

      return res.status(200).json(cosecha)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener la cosecha' })
    }
  }

  // CUU4 paso 3: registra kilos/ha y humedad, y pasa el lote a "Cosechado".
  async create(req: Request, res: Response) {
    try {
      const { loteSemillaCampaniaId, kilosHectarea, porcentajeHumedad, fechaCosecha } = req.body

      const kilos = Number(kilosHectarea)
      if (isNaN(kilos) || kilos <= 0) {
        return res.status(400).json({ message: 'kilosHectarea debe ser un número mayor a 0' })
      }

      const humedad = Number(porcentajeHumedad)
      if (isNaN(humedad) || humedad < 0 || humedad > 100) {
        return res.status(400).json({ message: 'porcentajeHumedad debe estar entre 0 y 100' })
      }

      const fecha = parseFecha(fechaCosecha)
      if (!fecha) {
        return res.status(400).json({ message: 'fechaCosecha debe tener formato yyyy-MM-dd' })
      }

      const loteSemillaCampania = await orm.em.findOne(
        LoteSemillaCampania,
        { id: Number(loteSemillaCampaniaId) },
        { populate: ['lote', 'campania'] },
      )
      if (!loteSemillaCampania) {
        return res.status(404).json({ message: 'LoteSemillaCampania no encontrado' })
      }

      // CUU4 alternativo 2.a
      if (loteSemillaCampania.campania.estado !== 'Abierta') {
        return res.status(409).json({ message: 'El lote no posee una campaña activa' })
      }

      const { lote } = loteSemillaCampania
      if (lote.estado !== 'Sembrado') {
        return res.status(409).json({ message: 'El lote no está Sembrado' })
      }

      const siembra = await orm.em.findOne(Siembra, { loteSemillaCampania })
      if (!siembra) {
        return res.status(409).json({ message: 'El lote no tiene una siembra registrada en esta campaña' })
      }

      const cosechaExistente = await orm.em.findOne(Cosecha, { siembra })
      if (cosechaExistente) {
        return res.status(409).json({ message: 'Ya hay una cosecha registrada para esta siembra' })
      }

      const cosecha = orm.em.create(Cosecha, {
        siembra,
        kilosHectarea: kilos,
        porcentajeHumedad: humedad,
        fechaCosecha: fecha,
      })

      lote.estado = 'Cosechado'

      await orm.em.flush()

      return res.status(201).json({
        cosecha,
        rendimientoTotalKg: kilos * lote.superficie,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al registrar la cosecha' })
    }
  }
}
