import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { LaborMantenimiento } from '../laborMantenimiento/laborMantenimiento.entity.js'
import { Insumo } from '../insumo/insumo.entity.js'

export const DetalleConsumo = defineEntity({
  name: 'DetalleConsumo',
  extends: BaseEntity,
  properties: {
    labor: p.manyToOne(LaborMantenimiento),
    insumo: p.manyToOne(Insumo),
    costo: p.float(),
    cantidadUtilizada: p.float(),
  },
  uniques: [{ properties: ['labor', 'insumo'] }],
})
