import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

// export const ESTADOS_LOTE = ['Libre', 'En uso', 'Sembrado', 'Cosechado'] as const

export const Lote = defineEntity({
    name: 'Lote',
    extends: BaseEntity,
    properties: {
        nroLote: p.integer(),
        superficie: p.decimal('number'),
        distanciaSurcos: p.decimal('number'),
        estado: p.string(),
        zona: p.string(),
    },
})
