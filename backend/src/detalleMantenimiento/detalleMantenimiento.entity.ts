import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { LoteSemillaCampania } from '../loteSemillaCampania/loteSemillaCampania.entity.js'
import { LaborMantenimiento } from '../laborMantenimiento/laborMantenimiento.entity.js'

export const DetalleMantenimiento = defineEntity({
  name: 'DetalleMantenimiento',
  extends: BaseEntity,
  properties: {
    loteSemillaCampania: p.manyToOne(LoteSemillaCampania),
    labor: p.manyToOne(LaborMantenimiento),
    fecha: p.date(),
  },
  uniques: [{ properties: ['loteSemillaCampania', 'labor', 'fecha'] }],
})
