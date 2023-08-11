import hyRequest from '@/service'
import { IDataType } from '@/service/types'
import { IUserData } from './types'

export function getPageList(url: string, queryInfo: any) {
  return hyRequest.post<IDataType<IUserData>>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function updatePageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
