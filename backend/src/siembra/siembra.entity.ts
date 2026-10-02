import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'

export const Siembra = defineEntity({
  name: 'Siembra',
  extends: BaseEntity,
  properties: {
    loteSemillaCampania: p.manyToOne(LoteSemillaCampania),
    fechaSiembra: p.date(),
    cantidadSembrada: p.float(),
  },
})
