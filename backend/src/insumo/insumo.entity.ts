import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const Insumo = defineEntity({
  name: 'Insumo',
  extends: BaseEntity,
  properties: {
    nombre: p.string(),
    stock: p.integer(),
    precioUnitario: p.decimal(),
  },
})