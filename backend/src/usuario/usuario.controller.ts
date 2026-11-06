import { json, Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Usuario } from './usuario.entity.js'
import { Rol } from '../rol/rol.entity.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getJwtSecret } from '../shared/auth/jwt.js'

export class UsuarioController {

  async getAll(req: Request, res: Response) {
    try {
      const usuarios = await orm.em.find(Usuario, {}, { populate: ['rol'] })

      return res.status(200).json(usuarios)
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error al obtener los usuarios',
      })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const usuario = await orm.em.findOne(
        Usuario,
        { email },
        { populate: ['rol'] }
      );

      if (!usuario) {
        return res.status(401).json({
          message: "Credenciales inválidas"
        });
      }
      const validPassword = await bcrypt.compare(
        password,
        usuario.password
      );
      if (!validPassword) {
        return res.status(401).json({
          message: "Credenciales inválidas"
        });
      }
      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          roleId: usuario.rol.id
        },
        getJwtSecret(),
        {
          expiresIn: '1d',
          algorithm: 'HS256'
        }
      );
      return res.status(200).json({
        token,
        usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rolId: usuario.rol.id },
      });
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error al iniciar sesión' })
    }
  }
  
    async create(req: Request, res: Response) {
        try {
            
            const existe = await orm.em.findOne(Usuario, { email: req.body.email })
            if (existe) {
            return res.status(409).json({ 
                message: 'El email ya está registrado' 
            })
            }

            const rol = await orm.em.findOne(Rol, {id: req.body.rolId})
            if (!rol) {
            return res.status(404).json({
                message: 'Rol no encontrado',
            })
            }

            if (!rol) {
            return res.status(404).json({
                message: 'Rol no encontrado',
            })
            }
            const hashedPassword  = await bcrypt.hash(req.body.password, 10);

            const usuario = orm.em.create(Usuario, {...req.body, rol, password: hashedPassword})
            await orm.em.flush()
            return res.status(201).json(usuario)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Error al crear el usuario' })
        }
    }


    async update(req: Request, res: Response) {
        try {
        const id = Number(req.params.id)

        const usuario = await orm.em.findOne(Usuario, { id: id })

        if (!usuario) {
            return res.status(404).json({
            message: 'usuario no encontrado',
            })
        }

        const { nombre, email, oldPassword, newPassword } = req.body

        const validPassword = await bcrypt.compare(
            oldPassword,
            usuario.password
        )

        if (validPassword && nombre !== undefined) {
            usuario.nombre = nombre
        }
        if (validPassword && email !== undefined) {
            usuario.email = email
        }

        const hashedPassword  = await bcrypt.hash(newPassword, 10)
        if (validPassword && newPassword !== undefined) {
            usuario.password = hashedPassword
        }

        await orm.em.flush()

        return res.status(200).json(usuario)
        } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error al actualizar el usuario',
        })
        }
    }

    async resetPassword(req: Request, res: Response) {
        try {
        const id = Number(req.params.id)
        const { password } = req.body

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ message: 'Identificador de usuario inválido' })
        }
        if (typeof password !== 'string' || password.length === 0) {
            return res.status(400).json({ message: 'La nueva contraseña es obligatoria' })
        }

        const usuario = await orm.em.findOne(Usuario, { id })
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }

        usuario.password = await bcrypt.hash(password, 10)
        await orm.em.flush()

        return res.status(200).json({ message: 'Contraseña restablecida' })
        } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error al restablecer la contraseña' })
        }
    }


    async remove(req: Request, res: Response) {
        try{
        const id = Number(req.params.id)
        const usuario = await orm.em.findOne(Usuario, { id: id })
        if(!usuario) {
            return res.status(404).json({
            message: 'Usuario no encontrado',
            })
        }
        await orm.em.remove(usuario)
        await orm.em.flush()
        return res.status(200).json({
            message: 'Usuario eliminado',
        })
        } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error al eliminar el usuario',
        })
        }
  }
}