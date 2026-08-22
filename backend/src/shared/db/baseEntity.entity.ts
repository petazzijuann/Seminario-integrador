import { defineEntity, p } from '@mikro-orm/core'

export const BaseEntity = defineEntity({
  name: 'BaseEntity',
  properties: {
    id: p.integer().primary(),
  },
})