import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { DetalleMantenimiento } from '../detalleMantenimiento/detalleMantenimiento.entity.js'
import { Insumo } from '../insumo/insumo.entity.js'

// El consumo cuelga de la labor REALIZADA (lote + campaña + fecha), no del catálogo,
// así los insumos y su costo quedan imputados a la campaña correspondiente.
export const DetalleConsumo = defineEntity({
  name: 'DetalleConsumo',
  extends: BaseEntity,
  properties: {
    detalleMantenimiento: p.manyToOne(DetalleMantenimiento),
    insumo: p.manyToOne(Insumo),
    costo: p.float(),
    cantidadUtilizada: p.float(),
  },
  uniques: [{ properties: ['detalleMantenimiento', 'insumo'] }],
})
