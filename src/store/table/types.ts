export interface ISystemState {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
}

export type PageName = 'user' | 'role' | 'goods'
export interface IListPayLoad {
  pageName: PageName
  queryInfo: {
    offset: number
    size: number
  }
}
