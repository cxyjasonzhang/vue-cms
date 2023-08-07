export interface ISystemState {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
}

export type PageName = 'user' | 'role'
export interface IListPayLoad {
  pageName: PageName
  queryInfo: {
    offset: number
    size: number
  }
}
