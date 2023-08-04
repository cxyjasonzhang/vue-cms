import hyRequest from '@/service'
import { IDataType } from '@/service/types'
import { IUserData } from './types'

export function getPageList(url: string, queryInfo: any) {
  return hyRequest.post<IDataType<IUserData>>({
    url: url,
    data: queryInfo
  })
}
