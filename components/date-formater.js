import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'
export default function DateFormater({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy', { locale: es })}</time>
}
