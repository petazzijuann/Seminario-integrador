import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'
import { Percance } from '../percance/percance.entity.js'

export const CostoPercance = defineEntity({
  name: 'CostoPercance',
  extends: BaseEntity,
  properties: {
    siembra: p.manyToOne(Siembra),
    percance: p.manyToOne(Percance),
    costo: p.float(),
  },
  uniques: [{ properties: ['siembra', 'percance'] }],
})
