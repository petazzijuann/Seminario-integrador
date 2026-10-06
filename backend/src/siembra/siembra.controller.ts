import {Request, Response} from 'express'
import { orm } from '../shared/db/orm.js'
import { Siembra } from './siembra.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Semilla } from '../semilla/semilla.entity.js'
import { send } from 'node:process'
import { format } from 'date-fns';


export class SiembraController {
   async create(req: Request, res: Response) {
      try {
        const { loteSemillaCampaniaId, cantidadSembrada } = req.body
        
        const loteSemillaCampania = await orm.em.findOne(LoteSemillaCampania, { id: loteSemillaCampaniaId })
        if (!loteSemillaCampania) {
          return res.status(404).json({ message: 'LoteSemillaCampania no encontrado' })
        }

        const semilla = await orm.em.findOne(Semilla, { id: loteSemillaCampania.semilla.id })
        if (!semilla || semilla.stock < cantidadSembrada){
          return res.status(400).json({ message: 'La cantidad a sembrar es mayor a la disponible' })
        }

        const fechaSiembra = format(Date.now(), 'dd/MM/yyyy')
        const siembra = orm.em.create(Siembra, {
          loteSemillaCampania,
          fechaSiembra,
          cantidadSembrada
        })

        semilla.stock = semilla.stock - cantidadSembrada
  
        await orm.em.flush()
        return res.status(201).json(siembra)
      } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error al crear el lote' })
      }
    }
}