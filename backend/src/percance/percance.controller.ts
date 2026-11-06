import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Percance } from './percance.entity.js'
import { CostoPercance } from '../costoPercance/costoPercance.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { parseFecha } from '../shared/fecha.js'

// Percance general: un mismo percance (ej.: un granizo) que afecta a varias siembras.
// El modelo ya lo soporta: Percance 1 — N CostoPercance N — 1 Siembra, con un costo por siembra.
// En el CUU2 cada percance se crea junto con su siembra; acá se crea uno solo y se asocia a muchas.
export class PercanceController {
  async siembrasDisponibles(req: Request, res: Response) {
    try {
      const siembras = await orm.em.find(
        Siembra,
        { loteSemillaCampania: { lote: { estado: 'Sembrado' }, campania: { estado: 'Abierta' } } },
        { populate: ['loteSemillaCampania.lote', 'loteSemillaCampania.semilla', 'loteSemillaCampania.campania'] },
      )
      return res.status(200).json(siembras)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las siembras en curso' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { descripcion, fecha, siembras = [] } = req.body

      if (typeof descripcion !== 'string' || !descripcion.trim()) {
        return res.status(400).json({ message: 'La descripción del percance es obligatoria' })
      }

      const fechaPercance = parseFecha(fecha)
      if (!fechaPercance) {
        return res.status(400).json({ message: 'fecha debe tener formato yyyy-MM-dd' })
      }

      if (!Array.isArray(siembras) || siembras.length === 0) {
        return res.status(400).json({ message: 'Elegí al menos una siembra afectada' })
      }

      const ids = siembras.map((s) => Number(s?.siembraId))
      if (ids.some((id) => !Number.isInteger(id) || id <= 0)) {
        return res.status(400).json({ message: 'Cada siembra necesita un siembraId válido' })
      }
      if (new Set(ids).size !== ids.length) {
        return res.status(400).json({ message: 'Hay siembras repetidas en el percance' })
      }
      if (siembras.some((s) => isNaN(Number(s.costo)) || Number(s.costo) < 0)) {
        return res.status(400).json({ message: 'El costo de cada siembra debe ser un número mayor o igual a 0' })
      }

      const encontradas = await orm.em.find(
        Siembra,
        { id: { $in: ids } },
        { populate: ['loteSemillaCampania.lote', 'loteSemillaCampania.campania'] },
      )
      if (encontradas.length !== ids.length) {
        return res.status(404).json({ message: 'Alguna de las siembras no existe' })
      }

      const noDisponibles = encontradas.filter(
        (s) => s.loteSemillaCampania.lote.estado !== 'Sembrado' || s.loteSemillaCampania.campania.estado !== 'Abierta',
      )
      if (noDisponibles.length > 0) {
        return res.status(409).json({
          message: 'Algunos lotes ya no están sembrados o su campaña no está abierta',
          lotes: noDisponibles.map((s) => s.loteSemillaCampania.lote.nroLote),
        })
      }

      const percance = orm.em.create(Percance, { descripcion: descripcion.trim(), fechaPercance })

      const porId = new Map(encontradas.map((s) => [s.id, s]))
      for (const { siembraId, costo } of siembras) {
        orm.em.create(CostoPercance, { percance, siembra: porId.get(Number(siembraId))!, costo: Number(costo) })
      }

      await orm.em.flush()
      return res.status(201).json(percance)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al registrar el percance' })
    }
  }
}
