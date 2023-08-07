import { defineStore } from 'pinia'
import { ISystemState, IListPayLoad } from './types'
import { getPageList } from '@/service/main/system/system'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },

  getters: {
    pageListGetter() {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return this.userList
          case 'role':
            return this.roleList
        }
      }
    }
  },

  actions: {
    async getPageListAction(payload: IListPayLoad) {
      let requestUrl = ''
      switch (payload.pageName) {
        case 'user':
          requestUrl = '/users/list'
          break
        case 'role':
          requestUrl = '/role/list'
          break
      }
      const resultData = await getPageList(requestUrl, payload.queryInfo)
      this[`${payload.pageName}List`] = resultData.data.list
      this[`${payload.pageName}Count`] = resultData.data.totalCount
    }
  }
})
