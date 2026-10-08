# Contexto del proyecto — AgroControl (para asistencia de IA)

Este documento le da contexto a Claude (u otra IA) sobre el proyecto en el que estoy
trabajando, para que las respuestas sean consistentes con el stack, las convenciones y
el modelo del sistema. **Leer esto antes de generar o modificar código.**

---

## 1. Qué es el proyecto

**AgroControl** es un sistema web para la gestión productiva de unidades agropecuarias
(lotes, campañas, siembras, labores, cosechas e insumos). Es un trabajo académico de la
materia Seminario Integrador (tercer año). El objetivo del sistema es centralizar el
registro de todas las intervenciones técnicas y el consumo de insumos por lote y campaña,
para generar historial y calcular costos/rendimientos.

Actor principal del sistema: **Ingeniero Agrónomo**.

---

## 2. Stack técnico (backend)

- **Node.js 18+** con **TypeScript**
- **Express** (servidor HTTP / API REST)
- **MikroORM** (ORM, driver PostgreSQL)
- **PostgreSQL alojado en Supabase** (base remota, NO local)
- **pnpm** como gestor de paquetes (NO usar npm dentro del proyecto)
- Servidor local en `http://localhost:3000`
- Endpoints bajo el prefijo `/api/...`

### Comandos
- Instalar dependencias: `pnpm install`
- Levantar en desarrollo: `pnpm dev` (corre `tsx watch src/app.ts`)
- La base está en Supabase; localmente solo se levanta el servidor.

### Detalle importante del esquema
- `src/app.ts` llama a `syncSchema()` al arrancar, que ejecuta `orm.schema.update()`.
- Esto significa que **las tablas se crean/actualizan automáticamente a partir de las
  entities** cada vez que se levanta el server. NO hay que correr migraciones a mano.
- ⚠️ En MikroORM 7, `schema.update()` corre por defecto con `safe: false` y
  `dropTables: true`: **borra las columnas que se sacan de una entity y las tablas del
  schema `public` que no tengan entity**. Renombrar o quitar una propiedad = perder esa
  columna con sus datos en la base compartida. Avisar al grupo antes de hacerlo.
  NUNCA usar `schema.fresh()` ni `schema.drop()` (borrarían datos de todo el grupo).
- Las entities se auto-descubren por patrón (`src/**/*.entity.ts`), no hay que
  registrarlas manualmente en la config.

---

## 3. Estructura del proyecto

```
backend/
├── src/
│   ├── insumo/                     ← módulo de ejemplo (ya hecho por un compañero)
│   │   ├── insumo.entity.ts
│   │   ├── insumo.controller.ts
│   │   └── insumo.routes.ts
│   ├── shared/
│   │   └── db/
│   │       ├── baseEntity.entity.ts  ← BaseEntity (aporta el id)
│   │       └── orm.ts                 ← config de MikroORM + syncSchema
│   └── app.ts                       ← arma Express, registra routers, syncSchema
├── .env                             ← credenciales de Supabase (NO se commitea)
├── package.json
└── pnpm-lock.yaml
```

**Convención por módulo (patrón a replicar):** cada entidad tiene 3 archivos
(`.entity.ts`, `.controller.ts`, `.routes.ts`) dentro de su carpeta, y se registra
con una línea en `app.ts`.

---

## 4. Convenciones de código (respetar sí o sí)

- **Entities con `defineEntity`** (estilo funcional de MikroORM), NO decoradores.
  Extienden de `BaseEntity` (que aporta `id: p.integer().primary()`).
- **Imports con extensión `.js`** aunque los archivos sean `.ts`
  (ej. `import { Lote } from './lote.entity.js'`). Es por la config de módulos ES.
  Esto NO es un error — es obligatorio en este proyecto.
- **Propiedades en camelCase** (ej. `precioUnitario`, `nroLote`). MikroORM las mapea a
  snake_case en la base automáticamente.
- Controllers como **clase** con métodos async, manejo de errores con try/catch y
  respuestas `res.status(...).json(...)`.
- Routers con `Router()` de Express y `.bind(controller)` en cada handler.

### Ejemplo de referencia (entity de insumo)
```typescript
import { defineEntity, p } from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

export const Insumo = defineEntity({
  name: 'Insumo',
  extends: BaseEntity,
  properties: {
    nombre: p.string(),
    stock: p.integer(),
    precioUnitario: p.decimal(),
  },
})
```

---

## 5. Flujo de trabajo (Git)

- El módulo de **Insumo** ya está hecho y sirve de plantilla para el resto de los CRUD.
- Cada integrante trabaja en su **propia rama** (no en `main`) y luego integra por
  Pull Request.
- El archivo `app.ts` es punto probable de conflicto de merge (todos agregan sus
  routers ahí). Antes de mergear, traer lo último de `main` a la rama propia.
- El `.env` NO se commitea (está en `.gitignore`): contiene las credenciales de Supabase.

### Qué NO se versiona

El `.gitignore` ignora `.env`, `node_modules/` y `dist/`.

`node_modules` estuvo versionado por error hasta el PR #2 (~14.600 archivos que
cambiaban con cada `pnpm install` y ensuciaban todos los PR). Ya se sacó del índice.
Si al traer main te desaparece la carpeta `node_modules`, es esperado: corré
`pnpm install` y listo.

---

## 6. Modelo de dominio (atributos por entidad)

Estos son los atributos definidos en el Modelo de Dominio del análisis. Las entities
deben reflejarlos.

- **Lote**: nroLote, superficie, distanciaSurcos, estado, zona
- **Semilla**: nombre, stock, estacion, **estado** (el `estado` soporta la baja lógica)
- **Labor Mantenimiento**: nombre / descripcion, costeBase  *(es un catálogo de labores
  predefinidas: "Aplicar herbicida", "Aplicar fertilizante", etc.)*
- **Insumo** (ya hecho): nombre, stock, precioUnitario  *(en el modelo también lleva
  `estado` para baja lógica, aunque la entity actual del compañero todavía no lo incluye)*
- **Campaña**: fecha, temporada  *(reifica la relación Lote–Semilla)*
- **Siembra**: cantidadSembrada, fecha
- **Cosecha**: fecha, kilosHectarea, porcentajeHumedad
- **Percance**: descripcion, fecha  *(el costo va en una asociativa con Siembra)*

### Reglas de negocio relevantes
- Un lote no puede tener más de un cultivo activo en simultáneo.
- La baja de Insumo y de Semilla es **lógica** (cambio de `estado`), no física
  (para no romper el histórico). → operación de UPDATE del estado, no DELETE.
- Labor de Mantenimiento es un **catálogo** reutilizable entre campañas.
- Estados del Lote: Libre → En uso → Sembrado → Cosechado → (vuelve a Libre al cerrar,
  o vuelve a En uso si hay doble cultivo).

---

## 7. Qué necesito de la IA

- Generar/ajustar código **respetando las convenciones de la sección 4** (defineEntity,
  imports `.js`, camelCase, patrón de 3 archivos por módulo).
- Que las operaciones de cada CRUD sean coherentes con las reglas de negocio (ej. Semilla
  con baja lógica vía update de estado, no delete).
- Avisarme si algo que propone podría romper la base compartida o el trabajo del compañero.
- No inventar comandos de MikroORM destructivos.