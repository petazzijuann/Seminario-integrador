import express, { type Express, type Request, type Response } from 'express';
import { orm, syncSchema } from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'
import { insumosRouter } from './insumo/insumo.routes.js'

const app = express()
app.use(express.json())

//luego de los middlewares base
app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})
//antes de las rutas y middlewares de negocio

app.use('/api/insumos', insumosRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

await syncSchema()

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})