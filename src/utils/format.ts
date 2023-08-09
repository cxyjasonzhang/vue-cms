import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCDate(utcString: string, format: string = DEFAULT_FORMAT) {
  return dayjs.utc(utcString).format(format)
}

export const parseIconName = (iconName: string): string => {
  if (iconName) {
    const arr = iconName.split('-')
    if (arr.length === 3) {
      return arr[2]
    } else {
      return arr[2] + '-' + arr[3] + '-' + arr[4]
    }
  } else {
    return ''
  }
}
