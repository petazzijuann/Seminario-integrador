import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { Cosecha } from '../cosecha/cosecha.entity.js'
import { CostoPercance } from '../costoPercance/costoPercance.entity.js'
import { DetalleMantenimiento } from '../detalleMantenimiento/detalleMantenimiento.entity.js'
import { DetalleConsumo } from '../detalleConsumo/detalleConsumo.entity.js'

// Rinde de las campañas cerradas: una fila por lote con lo que se sembró, lo que se cosechó
// y lo que se gastó, separado por rubro. Los totales y las comparaciones los arma el front.
//
// Costos:
// - semilla:   cantidadSembrada (t) × precioUnitario actual de la semilla ($/t)
// - labores:   costeBase actual de cada labor registrada
// - insumos:   DetalleConsumo.costo (queda guardado con el precio del momento)
// - percances: CostoPercance.costo
export class RindeController {
  async getAll(req: Request, res: Response) {
    try {
      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { campania: { estado: 'Cerrada' } },
        { populate: ['lote', 'semilla', 'campania'] },
      )

      if (asignaciones.length === 0) {
        return res.status(200).json([])
      }

      // Se trae todo de una vez por tabla y se agrupa en memoria (evita una consulta por lote).
      const siembras = await orm.em.find(Siembra, { loteSemillaCampania: { $in: asignaciones } })
      const cosechas = siembras.length ? await orm.em.find(Cosecha, { siembra: { $in: siembras } }) : []
      const percances = siembras.length ? await orm.em.find(CostoPercance, { siembra: { $in: siembras } }) : []
      const mantenimientos = await orm.em.find(
        DetalleMantenimiento,
        { loteSemillaCampania: { $in: asignaciones } },
        { populate: ['labor'] },
      )
      const consumos = mantenimientos.length
        ? await orm.em.find(DetalleConsumo, { detalleMantenimiento: { $in: mantenimientos } })
        : []

      const siembraPorAsignacion = new Map(siembras.map((s) => [s.loteSemillaCampania.id, s]))
      const cosechaPorSiembra = new Map(cosechas.map((c) => [c.siembra.id, c]))

      const percancesPorSiembra = new Map<number, number>()
      for (const p of percances) {
        percancesPorSiembra.set(p.siembra.id, (percancesPorSiembra.get(p.siembra.id) ?? 0) + Number(p.costo))
      }

      const insumosPorMantenimiento = new Map<number, number>()
      for (const c of consumos) {
        const id = c.detalleMantenimiento.id
        insumosPorMantenimiento.set(id, (insumosPorMantenimiento.get(id) ?? 0) + Number(c.costo))
      }

      const laboresPorAsignacion = new Map<number, { cantidad: number; labores: number; insumos: number }>()
      for (const m of mantenimientos) {
        const id = m.loteSemillaCampania.id
        const acumulado = laboresPorAsignacion.get(id) ?? { cantidad: 0, labores: 0, insumos: 0 }
        acumulado.cantidad += 1
        acumulado.labores += Number(m.labor.costeBase)
        acumulado.insumos += insumosPorMantenimiento.get(m.id) ?? 0
        laboresPorAsignacion.set(id, acumulado)
      }

      const filas = asignaciones.map((a) => {
        const siembra = siembraPorAsignacion.get(a.id)
        const cosecha = siembra ? cosechaPorSiembra.get(siembra.id) : undefined
        const labores = laboresPorAsignacion.get(a.id) ?? { cantidad: 0, labores: 0, insumos: 0 }
        const superficie = Number(a.lote.superficie)
        const cantidadSembrada = siembra ? Number(siembra.cantidadSembrada) : 0

        const costos = {
          semilla: cantidadSembrada * Number(a.semilla.precioUnitario),
          labores: labores.labores,
          insumos: labores.insumos,
          percances: siembra ? percancesPorSiembra.get(siembra.id) ?? 0 : 0,
        }

        return {
          loteSemillaCampaniaId: a.id,
          campania: { id: a.campania.id, fecha: a.campania.fecha, temporada: a.campania.temporada },
          lote: { id: a.lote.id, nroLote: a.lote.nroLote, superficie, zona: a.lote.zona },
          semilla: { id: a.semilla.id, nombre: a.semilla.nombre },
          fechaSiembra: siembra?.fechaSiembra ?? null,
          cantidadSembrada,
          fechaCosecha: cosecha?.fechaCosecha ?? null,
          kilosHectarea: cosecha ? Number(cosecha.kilosHectarea) : null,
          porcentajeHumedad: cosecha ? Number(cosecha.porcentajeHumedad) : null,
          produccionKg: cosecha ? Number(cosecha.kilosHectarea) * superficie : 0,
          cantidadLabores: labores.cantidad,
          costos: { ...costos, total: costos.semilla + costos.labores + costos.insumos + costos.percances },
        }
      })

      return res.status(200).json(filas)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al calcular el rinde de las campañas' })
    }
  }
}
