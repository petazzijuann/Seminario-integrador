import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Siembra } from '../siembra/siembra.entity.js'

export const Cosecha = defineEntity({
  name: 'Cosecha',
  extends: BaseEntity,
  properties: {
    siembra: p.manyToOne(Siembra),
    kilosHectarea: p.float(),
    porcentajeHumedad: p.float(),
    fechaCosecha: p.date(),
  },
})
