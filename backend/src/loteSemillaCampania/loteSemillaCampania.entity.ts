import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Lote } from '../lote/lote.entity.js'
import { Semilla } from '../semilla/semilla.entity.js'
import { Campania } from '../campania/campania.entity.js'

export const LoteSemillaCampania = defineEntity({
  name: 'LoteSemillaCampania',
  extends: BaseEntity,
  properties: {
    lote: p.manyToOne(Lote),
    semilla: p.manyToOne(Semilla),
    campania: p.manyToOne(Campania),
  },
  uniques: [{ properties: ['lote', 'semilla', 'campania'] }],
})
