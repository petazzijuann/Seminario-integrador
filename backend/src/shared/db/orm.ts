import { MikroORM  } from '@mikro-orm/postgresql'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import 'dotenv/config';
import { BaseEntity } from './baseEntity.entity.js'
import { Campania } from '../../campania/campania.entity.js'
import { Cosecha } from '../../cosecha/cosecha.entity.js'
import { CostoPercance } from '../../costoPercance/costoPercance.entity.js'
import { DetalleConsumo } from '../../detalleConsumo/detalleConsumo.entity.js'
import { DetalleMantenimiento } from '../../detalleMantenimiento/detalleMantenimiento.entity.js'
import { Insumo } from '../../insumo/insumo.entity.js'
import { LaborMantenimiento } from '../../laborMantenimiento/laborMantenimiento.entity.js'
import { Lote } from '../../lote/lote.entity.js'
import { LoteSemillaCampania } from '../../loteSemillaCampania/loteSemillaCampania.entity.js'
import { Percance } from '../../percance/percance.entity.js'
import { Semilla } from '../../semilla/semilla.entity.js'
import { Siembra } from '../../siembra/siembra.entity.js'

export const orm = await MikroORM.init({
  // Lista explícita (no globs): en Vercel los archivos sueltos no existen en runtime.
  // Al crear una entity nueva hay que agregarla acá.
  entities: [
    BaseEntity,
    Campania,
    Cosecha,
    CostoPercance,
    DetalleConsumo,
    DetalleMantenimiento,
    Insumo,
    LaborMantenimiento,
    Lote,
    LoteSemillaCampania,
    Percance,
    Semilla,
    Siembra,
  ],
  dbName: process.env.DB_NAME,
  clientUrl: process.env.DB_URL,
  highlighter: new SqlHighlighter(),
  debug: true,
  schemaGenerator: {
    disableForeignKeys: true,
    createForeignKeyConstraints: true,
    ignoreSchema: [
        'auth',
        'storage',
        'realtime',
        'vault',
        'extensions',
        'graphql',
        'graphql_public',
        'net',
        'pgbouncer',
        'supabase_functions',
        'supabase_migrations',
        '_realtime',
    ],
  },
})

export const syncSchema = async () => {
  await orm.schema.update()
}