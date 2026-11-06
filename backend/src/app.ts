import express, { type Express, type Request, type Response } from 'express';
import { orm, syncSchema } from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'
import { insumosRouter } from './insumo/insumo.routes.js'
import { loteRouter } from './lote/lote.routes.js'
import { semillaRouter } from './semilla/semilla.routes.js'
import { campaniasRouter } from './campania/campania.routes.js'
import { siembrasRouter } from './siembra/siembra.routes.js';
import { loteSemillaCampania } from './loteSemillaCampania/loteSemillaCampania.routes.js'
import { laboresRouter } from './laborMantenimiento/laborMantenimiento.routes.js'
import { mantenimientosRouter } from './detalleMantenimiento/detalleMantenimiento.routes.js'
import { cosechasRouter } from './cosecha/cosecha.routes.js'
import { rindeRouter } from './rinde/rinde.routes.js'
import { stockRouter } from './stock/stock.routes.js'
import { usuariosRouter } from './usuario/usuario.routes.js'
import { rolesRouter } from './rol/rol.routes.js'
import { percancesRouter } from './percance/percance.routes.js'
import { authenticateToken } from './shared/auth/authenticateToken.js'
import { authorizeOperationalAccess } from './shared/auth/authorizeOperationalAccess.js'

const app = express()
app.use(express.json())

//luego de los middlewares base
app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})
//antes de las rutas y middlewares de negocio

app.use('/api/insumos', authenticateToken, authorizeOperationalAccess, insumosRouter)
app.use('/api/lotes', authenticateToken, authorizeOperationalAccess, loteRouter)
app.use('/api/semillas', authenticateToken, authorizeOperationalAccess, semillaRouter)
app.use('/api/campanias', authenticateToken, authorizeOperationalAccess, campaniasRouter)
app.use('/api/siembras', authenticateToken, authorizeOperationalAccess, siembrasRouter)
app.use('/api/lote-semilla-campanias', authenticateToken, authorizeOperationalAccess, loteSemillaCampania)
app.use('/api/labores', authenticateToken, authorizeOperationalAccess, laboresRouter)
app.use('/api/mantenimientos', authenticateToken, authorizeOperationalAccess, mantenimientosRouter)
app.use('/api/cosechas', authenticateToken, authorizeOperationalAccess, cosechasRouter)
app.use('/api/rinde', authenticateToken, authorizeOperationalAccess, rindeRouter)
app.use('/api/stock', authenticateToken, authorizeOperationalAccess, stockRouter)
app.use('/api/usuario', usuariosRouter)
app.use('/api/percances', percancesRouter)
app.use('/api/rol', authenticateToken, authorizeOperationalAccess, rolesRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

// En Vercel (serverless) no se sincroniza el schema ni se abre un puerto:
// Vercel usa la app exportada. En local se mantiene el comportamiento de siempre.
if (!process.env.VERCEL) {
  await syncSchema()

  app.listen(3000, () => {
    console.log('Server runnning on http://localhost:3000/')
  })
}

export default app
