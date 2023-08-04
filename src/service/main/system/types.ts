export interface IUserData {
  list: IUserListData[]
  totalCount: number
}

export interface IUserListData {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
