# Backend - Seminario Integrador

Este proyecto corre con Node.js + Express + MikroORM. A continuación tienes una forma rápida de levantar el backend.

## Requisitos

- Node.js 18 o superior
- pnpm

## 1) Instalar dependencias

Desde la carpeta del backend:

```bash
cd backend
pnpm install
```

## 2) Configurar variables de entorno

Crear un archivo `.env` dentro de `backend/` con esta estructura:

```env
DB_URL=postgresql://usuario:password@localhost:5432/tu_base
DB_NAME=tu_base
```

> Ajusta los valores según tu base de datos local o remota.

## 3) Iniciar el backend

```bash
pnpm dev
```

Esto ejecuta la app con `tsx watch src/app.ts` y levanta el servidor en:

```text
http://localhost:3000
```

## 4) Verificar que funciona

Puedes probar la API desde el navegador o con Postman:

```text
http://localhost:3000/api/insumos
```

## 5) Detener el servidor

Presiona:

```bash
Ctrl + C
```

## Notas

- Si no existe el archivo `.env`, la aplicación no podrá conectarse a la base de datos.
- El proyecto usa pnpm como gestor de paquetes, por lo que se recomienda seguir ese flujo.
