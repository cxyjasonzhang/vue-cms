export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
  isLoading: boolean
}

export type PageName = 'users' | 'role' | 'goods' | 'menu'
export interface IListPayLoad {
  pageName: PageName
  queryInfo: {
    offset: number
    size: number
  }
}
export interface IDeletePayLoad {
  pageName: PageName
  id: number
}
