import { MikroORM  } from '@mikro-orm/postgresql'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import 'dotenv/config';

export const orm = await MikroORM.init({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
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