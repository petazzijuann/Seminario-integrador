import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Semilla } from '../semilla/semilla.entity.js'
import { Insumo } from '../insumo/insumo.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { DetalleConsumo } from '../detalleConsumo/detalleConsumo.entity.js'

// Tablero de stock: semillas e insumos con lo que se usó históricamente.
// "usos" = cantidad de siembras (semilla) o de labores (insumo) que lo consumieron;
// con el promedio por uso el front estima para cuántos usos más alcanza el stock.
export class StockController {
  async getAll(req: Request, res: Response) {
    try {
      const semillas = await orm.em.find(Semilla, {})
      const insumos = await orm.em.find(Insumo, {})
      const siembras = await orm.em.find(Siembra, {}, { populate: ['loteSemillaCampania'] })
      const consumos = await orm.em.find(DetalleConsumo, {})

      const usoSemillas = new Map<number, { usos: number; consumido: number }>()
      for (const s of siembras) {
        const id = s.loteSemillaCampania.semilla.id
        const uso = usoSemillas.get(id) ?? { usos: 0, consumido: 0 }
        uso.usos += 1
        uso.consumido += Number(s.cantidadSembrada)
        usoSemillas.set(id, uso)
      }

      const usoInsumos = new Map<number, { usos: number; consumido: number }>()
      for (const c of consumos) {
        const id = c.insumo.id
        const uso = usoInsumos.get(id) ?? { usos: 0, consumido: 0 }
        uso.usos += 1
        uso.consumido += Number(c.cantidadUtilizada)
        usoInsumos.set(id, uso)
      }

      return res.status(200).json({
        semillas: semillas.map((s) => ({
          id: s.id,
          nombre: s.nombre,
          estado: s.estado,
          estacion: s.estacion,
          stock: s.stock,
          precioUnitario: Number(s.precioUnitario),
          ...(usoSemillas.get(s.id) ?? { usos: 0, consumido: 0 }),
        })),
        insumos: insumos.map((i) => ({
          id: i.id,
          nombre: i.nombre,
          stock: i.stock,
          precioUnitario: Number(i.precioUnitario),
          ...(usoInsumos.get(i.id) ?? { usos: 0, consumido: 0 }),
        })),
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener el stock' })
    }
  }
}
