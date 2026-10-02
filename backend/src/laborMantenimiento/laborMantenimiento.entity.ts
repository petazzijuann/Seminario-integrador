import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const LaborMantenimiento = defineEntity({
  name: 'LaborMantenimiento',
  extends: BaseEntity,
  properties: {
    descripcion: p.text(),
    costeBase: p.float(),
  },
})
