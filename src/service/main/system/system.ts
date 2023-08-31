import hyRequest from '@/service'
import type { IDataType } from '@/service/types'
import type { IUserData } from './types'

export function getPageList(url: string, queryInfo: any) {
  return hyRequest.post<IDataType<IUserData>>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function updatePageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url,
    data: editData
  })
}
