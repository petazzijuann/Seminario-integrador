import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const TEMPORADAS = ['Invierno', 'Verano'] as const
export const ESTADOS_CAMPANIA = ['Abierta', 'Cerrada'] as const

export const Campania = defineEntity({
  name: 'Campania',
  extends: BaseEntity,
  properties: {
    fecha: p.date(),
    temporada: p.string(),
    // Default para que las campañas ya cargadas en Supabase queden 'Abierta' al agregar la columna.
    estado: p.enum(ESTADOS_CAMPANIA).default('Abierta'),
  },
})
