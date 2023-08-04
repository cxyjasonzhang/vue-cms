import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageList } from '@/service/main/system/system'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      userCount: 0
    }
  },

  getters: {},

  actions: {
    async getPageListAction(payload: any) {
      const resultData = await getPageList(payload.pageUrl, payload.queryInfo)
      this.userList = resultData.data.list
      this.userCount = resultData.data.totalCount
    }
  }
})
