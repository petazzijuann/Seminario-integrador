import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const Percance = defineEntity({
  name: 'Percance',
  extends: BaseEntity,
  properties: {
    fechaPercance: p.date(),
    descripcion: p.text(),
  },
})
