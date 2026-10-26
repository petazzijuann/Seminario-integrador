import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const Rol = defineEntity({
  name: 'Rol',
  extends: BaseEntity,
  properties: {
    descripcion: p.string(),
  },
})