import { defineStore } from 'pinia'
import { IDashboardState } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

export const useDashboardStore = defineStore('dashboard', {
  state: (): IDashboardState => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      categoryAddressGoodsSale: []
    }
  },
  getters: {},
  actions: {
    async getGoodsCountAction() {
      const resultData = await getCategoryGoodsCount()
      console.log(resultData, 'result1')
      const { data: resultList } = resultData
      this.categoryGoodsCount = resultList
    },
    async getGoodsSaleAction() {
      const resultData = await getCategoryGoodsSale()
      console.log(resultData, 'result2')
      const { data: resultList } = resultData
      this.categoryGoodsSale = resultList
    },
    async getGoodsFavorAction() {
      const resultData = await getCategoryGoodsFavor()
      console.log(resultData, 'result3')
      const { data: resultList } = resultData
      this.categoryGoodsFavor = resultList
    },
    async getAddressSaleAction() {
      const resultData = await getAddressGoodsSale()
      console.log(resultData, 'result4')
      const { data: resultList } = resultData
      this.categoryAddressGoodsSale = resultList
    }
  }
})
