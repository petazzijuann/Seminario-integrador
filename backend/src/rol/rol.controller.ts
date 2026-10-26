import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Rol } from './rol.entity.js'

export class RolController {

  async getAll(req: Request, res: Response) {
    try {
      const rol = await orm.em.find(Rol, {})

      return res.status(200).json(rol)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener los rol',
      })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      const rol = await orm.em.findOne(Rol, { id: id })

      if (!rol) {
        return res.status(404).json({
          message: 'Rol no encontrado',
        })
      }

      return res.status(200).json(rol)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener el rol',
      })
    }
  }
}