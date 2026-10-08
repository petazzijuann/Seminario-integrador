import { format, isValid, parse } from 'date-fns'

// Las columnas p.date() guardan 'yyyy-MM-dd'. Si no viene fecha se usa la de hoy.
// Devuelve null si la fecha recibida no es válida.
export const parseFecha = (fecha: unknown): string | null => {
  if (fecha === undefined || fecha === null || fecha === '') {
    return format(new Date(), 'yyyy-MM-dd')
  }

  if (typeof fecha !== 'string') return null

  const parsed = parse(fecha, 'yyyy-MM-dd', new Date())
  return isValid(parsed) ? format(parsed, 'yyyy-MM-dd') : null
}
