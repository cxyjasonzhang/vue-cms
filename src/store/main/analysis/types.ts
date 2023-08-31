export interface IDashboardState {
  categoryGoodsCount: ICategoryGoodsCount[]
  categoryGoodsSale: ICategoryGoodsCount[]
  categoryGoodsFavor: ICategoryGoodsFavor[]
  categoryAddressGoodsSale: ICategoryAddressGoodsSale[]
}

export interface ICategoryGoodsCount {
  id: number
  name: string
  goodsCount: number
}

export interface ICategoryGoodsFavor {
  id: number
  name: string
  goodsFavor: number
}

export interface ICategoryAddressGoodsSale {
  count: number
  address: string
}
