import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { DetalleMantenimiento } from './detalleMantenimiento.entity.js'
import { DetalleConsumo } from '../detalleConsumo/detalleConsumo.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { LaborMantenimiento } from '../laborMantenimiento/laborMantenimiento.entity.js'
import { Insumo } from '../insumo/insumo.entity.js'
import { parseFecha } from '../shared/fecha.js'

// CUU3 - Registrar Labor: cada registro es una labor del catálogo aplicada
// a un lote sembrado en una campaña abierta, con los insumos que consumió.
export class DetalleMantenimientoController {
  // CUU3 paso 1: lotes "Sembrado" de campañas abiertas.
  async lotesDisponibles(req: Request, res: Response) {
    try {
      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { lote: { estado: 'Sembrado' }, campania: { estado: 'Abierta' } },
        { populate: ['lote', 'semilla', 'campania'] },
      )
      return res.status(200).json(asignaciones)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener los lotes sembrados' })
    }
  }

  // Historial de labores; ?loteSemillaCampaniaId=N filtra por lote y campaña.
  async getAll(req: Request, res: Response) {
    try {
      const loteSemillaCampaniaId = req.query.loteSemillaCampaniaId

      if (loteSemillaCampaniaId !== undefined && isNaN(Number(loteSemillaCampaniaId))) {
        return res.status(400).json({ message: 'loteSemillaCampaniaId inválido' })
      }

      const mantenimientos = await orm.em.find(
        DetalleMantenimiento,
        loteSemillaCampaniaId === undefined ? {} : { loteSemillaCampania: Number(loteSemillaCampaniaId) },
        { populate: ['labor', 'loteSemillaCampania.lote'] },
      )
      return res.status(200).json(mantenimientos)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las labores registradas' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const mantenimiento = await orm.em.findOne(DetalleMantenimiento, { id: id }, {
        populate: ['labor', 'loteSemillaCampania.lote', 'loteSemillaCampania.semilla'],
      })
      if (!mantenimiento) {
        return res.status(404).json({ message: 'Labor registrada no encontrada' })
      }

      const consumos = await orm.em.find(DetalleConsumo, { detalleMantenimiento: mantenimiento }, {
        populate: ['insumo'],
      })

      return res.status(200).json({ mantenimiento, consumos })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener la labor registrada' })
    }
  }

  // CUU3 pasos 3 a 5: registra la labor, imputa el costo de los insumos a la
  // campaña y descuenta el stock. Body: { loteSemillaCampaniaId, laborId, fecha?, insumos: [{ insumoId, cantidad }] }
  async create(req: Request, res: Response) {
    try {
      const { loteSemillaCampaniaId, laborId, fecha, insumos = [] } = req.body

      const fechaLabor = parseFecha(fecha)
      if (!fechaLabor) {
        return res.status(400).json({ message: 'fecha debe tener formato yyyy-MM-dd' })
      }

      if (!Array.isArray(insumos)) {
        return res.status(400).json({ message: 'insumos debe ser una lista' })
      }

      // Insumo.stock es entero, por eso la cantidad también.
      // Si el mismo insumo viene repetido se suman las cantidades.
      const cantidades = new Map<number, number>()
      for (const item of insumos) {
        const insumoId = Number(item?.insumoId)
        const cantidad = Number(item?.cantidad)

        if (isNaN(insumoId) || !Number.isInteger(cantidad) || cantidad <= 0) {
          return res.status(400).json({ message: 'Cada insumo necesita insumoId y una cantidad entera mayor a 0' })
        }

        cantidades.set(insumoId, (cantidades.get(insumoId) ?? 0) + cantidad)
      }

      const loteSemillaCampania = await orm.em.findOne(
        LoteSemillaCampania,
        { id: Number(loteSemillaCampaniaId) },
        { populate: ['lote', 'campania'] },
      )
      if (!loteSemillaCampania) {
        return res.status(404).json({ message: 'LoteSemillaCampania no encontrado' })
      }

      if (loteSemillaCampania.campania.estado !== 'Abierta') {
        return res.status(409).json({ message: 'La campaña no está Abierta' })
      }

      if (loteSemillaCampania.lote.estado !== 'Sembrado') {
        return res.status(409).json({ message: 'El lote no está Sembrado' })
      }

      const labor = await orm.em.findOne(LaborMantenimiento, { id: Number(laborId) })
      if (!labor) {
        return res.status(404).json({ message: 'Labor no encontrada' })
      }

      const repetida = await orm.em.findOne(DetalleMantenimiento, { loteSemillaCampania, labor, fecha: fechaLabor })
      if (repetida) {
        return res.status(409).json({ message: 'Esa labor ya está registrada para este lote en esa fecha' })
      }

      // CUU3 alternativo 4.a: se valida todo el stock antes de tocar nada.
      const consumos = []
      for (const [insumoId, cantidad] of cantidades) {
        const insumo = await orm.em.findOne(Insumo, { id: insumoId })
        if (!insumo) {
          return res.status(404).json({ message: `Insumo ${insumoId} no encontrado` })
        }

        if (insumo.stock < cantidad) {
          return res.status(400).json({
            message: `Stock insuficiente de ${insumo.nombre}`,
            stockDisponible: insumo.stock,
            cantidadSolicitada: cantidad,
          })
        }

        consumos.push({ insumo, cantidad })
      }

      const mantenimiento = orm.em.create(DetalleMantenimiento, {
        loteSemillaCampania,
        labor,
        fecha: fechaLabor,
      })

      let costoInsumos = 0
      for (const { insumo, cantidad } of consumos) {
        const costo = cantidad * Number(insumo.precioUnitario)
        costoInsumos += costo

        orm.em.create(DetalleConsumo, {
          detalleMantenimiento: mantenimiento,
          insumo,
          cantidadUtilizada: cantidad,
          costo,
        })

        insumo.stock = insumo.stock - cantidad
      }

      await orm.em.flush()

      return res.status(201).json({
        mantenimiento,
        costoInsumos,
        costoTotal: labor.costeBase + costoInsumos,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al registrar la labor' })
    }
  }
}
