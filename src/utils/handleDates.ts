import { format, parseISO as ISO, addMinutes, subMinutes } from 'date-fns'

export function formatToLocal(date: string) {
  return format(ISO(date), 'yyyy-MM-dd HH:mm:ss')
}

export function dateLocalToUTC(date: Date) {
  const offset = date.getTimezoneOffset()
  return Math.sign(offset) !== -1
    ? addMinutes(date, offset)
    : subMinutes(date, Math.abs(offset))
}

/**
 * Normaly used to send date to server
 * return: yyyy-MM-dd HH:mm:ss (UTC)
 * (hh to 12hours config | HH to 24 hours config)
 * */
export function formatToUTC(date: string) {
  return format(dateLocalToUTC(ISO(date)), 'yyyy-MM-dd HH:mm:ss')
}

export function parseISO(date: string) {
  return ISO(date)
}
