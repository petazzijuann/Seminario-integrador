import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Rol } from '../rol/rol.entity.js'

export const Usuario = defineEntity({
  name: 'Usuario',
  extends: BaseEntity,
  properties: {
    id: p.integer().primary(),
    nombre: p.string(),
    email: p.string(),
    password: p.string().hidden(),
    rol: () => p.manyToOne(Rol),
  },
})