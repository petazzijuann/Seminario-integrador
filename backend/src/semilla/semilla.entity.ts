import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const Semilla = defineEntity({
  name: 'Semilla',
  extends: BaseEntity,
  properties: {
    nombre: p.string(),
    stock: p.integer(),
    estado: p.enum(['Activa', 'Inactiva']),
    estacion: p.string(),
    precioUnitario: p.decimal('number'),
  },
})