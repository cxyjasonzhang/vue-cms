export interface IProductState {
  goodList: any[]
  goodsCount: number
}

export type PageName = 'goods'
export interface IListPayLoad {
  pageName: PageName
  queryInfo: {
    offset: number
    size: number
  }
}
