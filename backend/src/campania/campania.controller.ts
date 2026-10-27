import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Campania, ESTADOS_CAMPANIA, TEMPORADAS } from './campania.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Lote } from '../lote/lote.entity.js'
import { Semilla } from '../semilla/semilla.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { Cosecha } from '../cosecha/cosecha.entity.js'

export class CampaniaController {
  // CUU5 paso 1: campañas (por defecto las Abiertas) con el estado de su lote.
  // ?estado=Cerrada para ver las cerradas, ?estado=todas para ver todas.
  async getAll(req: Request, res: Response) {
    try {
      const estado = (req.query.estado as string | undefined) ?? 'Abierta'

      if (estado !== 'todas' && !ESTADOS_CAMPANIA.includes(estado as any)) {
        return res.status(400).json({ message: `estado debe ser uno de: ${ESTADOS_CAMPANIA.join(', ')}, todas` })
      }

      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        estado === 'todas' ? {} : { campania: { estado: estado as typeof ESTADOS_CAMPANIA[number] } },
        { populate: ['lote', 'semilla', 'campania'] },
      )

      return res.status(200).json(asignaciones)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener las campañas' })
    }
  }

  // CUU5 paso 2: datos generales de la campaña, su lote, la siembra y la cosecha.
  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const campania = await orm.em.findOne(Campania, { id: id })
      if (!campania) {
        return res.status(404).json({ message: 'Campaña no encontrada' })
      }

      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { campania: campania },
        { populate: ['lote', 'semilla'] },
      )

      const lotes = []
      for (const asignacion of asignaciones) {
        const siembra = await orm.em.findOne(Siembra, { loteSemillaCampania: asignacion })
        const cosecha = siembra ? await orm.em.findOne(Cosecha, { siembra: siembra }) : null

        lotes.push({
          loteSemillaCampaniaId: asignacion.id,
          lote: asignacion.lote,
          semilla: asignacion.semilla,
          cantidadSembrada: siembra?.cantidadSembrada ?? null,
          kilosHectarea: cosecha?.kilosHectarea ?? null,
        })
      }

      return res.status(200).json({ campania, lotes })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al obtener la campaña' })
    }
  }

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


      const campania = orm.em.create(Campania, { fecha, temporada, estado: 'Abierta' })
      orm.em.create(LoteSemillaCampania, { lote, semilla, campania })
      lote.estado = 'En uso'


      await orm.em.flush()

      return res.status(201).json(campania)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al asignar el lote' })
    }
  }

async agregarSegundoCultivo(req: Request, res: Response) {
    try {
      // 1) Leer y validar los datos
      const id = Number(req.params.id)
      const loteId = Number(req.body.lote_id)
      const semillaId = Number(req.body.semilla_id)

      if (isNaN(id) || isNaN(loteId) || isNaN(semillaId)) {
        return res.status(400).json({ message: 'id, lote_id y semilla_id deben ser numéricos' })
      }

      const campania = await orm.em.findOne(Campania, { id: id })
      if (!campania) {
        return res.status(404).json({ message: 'Campaña no encontrada' })
      }
      if (campania.estado !== 'Abierta') {
        return res.status(409).json({ message: 'La campaña no está Abierta' })
      }
      
      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { campania: campania, lote: loteId },
        { populate: ['lote'] },
      )
      if (asignaciones.length === 0) {
        return res.status(404).json({ message: 'El lote no pertenece a esta campaña' })
      }
      if (asignaciones.length >= 2) {
        return res.status(409).json({ message: 'El lote ya tiene dos cultivos en esta campaña' })
      }
      
      const lote = asignaciones[0].lote
      if (lote.estado !== 'Cosechado') {
        return res.status(409).json({ message: 'El primer cultivo tiene que estar cosechado' })
      }

      const semilla = await orm.em.findOne(Semilla, { id: semillaId })
      if (!semilla) {
        return res.status(404).json({ message: 'Semilla no encontrada' })
      }
      if (semilla.estado !== 'Activa' || semilla.stock <= 0) {
        return res.status(409).json({ message: 'La semilla no está Activa o no tiene stock' })
      }
      if (asignaciones.some(a => a.semilla.id === semilla.id)) {
        return res.status(409).json({ message: 'Esa semilla ya se usó en este lote en esta campaña' })
      }

      const asignacion = orm.em.create(LoteSemillaCampania, { lote, semilla, campania })
      lote.estado = 'En uso'
      await orm.em.flush()
      return res.status(201).json(asignacion)
      } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al asignar el segundo cultivo' })
    }
  }

  // CUU5 pasos 3 y 4: valida que los lotes estén Cosechados, cierra la campaña y libera los lotes.
  async cerrar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (isNaN(id)) {
        return res.status(400).json({ message: 'Id inválido' })
      }

      const campania = await orm.em.findOne(Campania, { id: id })
      if (!campania) {
        return res.status(404).json({ message: 'Campaña no encontrada' })
      }

      if (campania.estado !== 'Abierta') {
        return res.status(409).json({ message: 'La campaña ya está Cerrada' })
      }

      const asignaciones = await orm.em.find(
        LoteSemillaCampania,
        { campania: campania },
        { populate: ['lote'] },
      )

      const noCosechados = asignaciones.filter(a => a.lote.estado !== 'Cosechado')
      if (noCosechados.length > 0) {
        return res.status(409).json({
          message: 'No se puede cerrar la campaña: hay lotes que no están Cosechados',
          lotes: noCosechados.map(a => ({ nroLote: a.lote.nroLote, estado: a.lote.estado })),
        })
      }

      campania.estado = 'Cerrada'
      for (const asignacion of asignaciones) {
        asignacion.lote.estado = 'Libre'
      }

      await orm.em.flush()

      return res.status(200).json({ message: 'Campaña cerrada', data: campania })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al cerrar la campaña' })
    }
  }
}
