export interface LoginStateType {
  token: string
  userInfo: any
  userMenus: any
}

// export interface UserProps {
//   name?: string
//   account: string
//   password: string
// }
export type PageName = 'user' | 'role' | 'goods'

export interface IListPayLoad<T> {
  pageName: T
  queryInfo: {
    offset: number
    size: number
  }
}
