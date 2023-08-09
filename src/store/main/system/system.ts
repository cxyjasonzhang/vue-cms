import { defineStore } from 'pinia'
import { ISystemState, IListPayLoad } from './types'
import { getPageList } from '@/service/main/system/system'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },

  getters: {
    pageListGetter() {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return this.usersList
          case 'role':
            return this.roleList
          case 'goods':
            return this.goodsList
          case 'menu':
            return this.menuList
        }
      }
    },
    pageCountGetter() {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return this.usersCount
          case 'role':
            return this.roleCount
          case 'goods':
            return this.goodsCount
          case 'menu':
            return this.menuCount
        }
      }
    }
  },

  actions: {
    async getPageListAction(payload: IListPayLoad) {
      let requestUrl = ''
      switch (payload.pageName) {
        case 'users':
          requestUrl = '/users/list'
          break
        case 'role':
          requestUrl = '/role/list'
          break
        case 'goods':
          requestUrl = '/goods/list'
          break
        case 'menu':
          requestUrl = '/menu/list'
      }
      const resultData = await getPageList(requestUrl, payload.queryInfo)
      this[`${payload.pageName}List`] = resultData.data.list
      this[`${payload.pageName}Count`] = resultData.data.totalCount
    }
  }
})
