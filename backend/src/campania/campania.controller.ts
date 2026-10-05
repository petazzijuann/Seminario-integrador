import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Campania, TEMPORADAS } from './campania.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Lote } from '../lote/lote.entity.js'
import { Semilla } from '../semilla/semilla.entity.js'

export class CampaniaController {

  async asignarLote(req: Request, res: Response) {
    try {
      const { lote_id, semilla_id, fecha, temporada } = req.body

      const loteId = Number(lote_id)
      const semillaId = Number(semilla_id)

      if (isNaN(loteId) || isNaN(semillaId)) {
        return res.status(400).json({ message: 'lote_id y semilla_id deben ser numéricos' })
      }

      if (!TEMPORADAS.includes(temporada)) {
        return res.status(400).json({ message: `temporada debe ser una de: ${TEMPORADAS.join(', ')}` })
      }

      const lote = await orm.em.findOne(Lote, { id: loteId })
      if (!lote) {
        return res.status(404).json({ message: 'Lote no encontrado' })
      }

      const semilla = await orm.em.findOne(Semilla, { id: semillaId })
      if (!semilla) {
        return res.status(404).json({ message: 'Semilla no encontrada' })
      }


      if (lote.estado !== 'Libre') {
        return res.status(409).json({ message: 'El lote no está Libre' })
      }

      if (semilla.estado !== 'Activa' || semilla.stock <= 0) {
        return res.status(409).json({ message: 'La semilla no está Activa o no tiene stock' })
      }

      
      const campania = orm.em.create(Campania, { fecha, temporada })
      orm.em.create(LoteSemillaCampania, { lote, semilla, campania })
      lote.estado = 'En uso'

      
      await orm.em.flush()

      return res.status(201).json(campania)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al asignar el lote' })
    }
  }
}
