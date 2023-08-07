import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCDate(utcString: string, format: string = DEFAULT_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
