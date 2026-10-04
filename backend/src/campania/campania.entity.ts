import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const TEMPORADAS = ['Invierno', 'Verano'] as const

export const Campania = defineEntity({
  name: 'Campania',
  extends: BaseEntity,
  properties: {
    fecha: p.date(),
    temporada: p.string(),
  },
})
