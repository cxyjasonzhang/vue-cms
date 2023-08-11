export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
}

export type PageName = 'user' | 'role' | 'goods'
export interface IListPayLoad {
  pageName: PageName
  queryInfo: {
    offset: number
    size: number
  }
}
