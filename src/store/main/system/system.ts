import { defineStore } from 'pinia'
import { ISystemState, IListPayLoad, IDeletePayLoad, PageName } from './types'
import { getPageList, deletePageData, createPageData, updatePageData } from '@/service/main/system/system'

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
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      isLoading: false
    }
  },

  getters: {
    pageListGetter() {
      return (pageName: PageName) => {
        return this[`${pageName}List`]
      }
    },
    pageCountGetter() {
      return (pageName: PageName) => {
        // switch (pageName) {
        //   case 'users':
        //     return this.usersCount
        //   case 'role':
        //     return this.roleCount
        //   case 'goods':
        //     return this.goodsCount
        //   case 'menu':
        //     return this.menuCount
        // }
        console.log(this[`${pageName}Count`], '数量')
        return this[`${pageName}Count`]
      }
    }
  },

  actions: {
    async getPageListAction(payload: IListPayLoad) {
      this.isLoading = true
      let requestUrl = ''
      // switch (payload.pageName) {
      //   case 'users':
      //     requestUrl = '/users/list'
      //     break
      //   case 'role':
      //     requestUrl = '/role/list'
      //     break
      //   case 'goods':
      //     requestUrl = '/goods/list'
      //     break
      //   case 'menu':
      //     requestUrl = '/menu/list'
      //     break
      //   case 'department':
      //     requestUrl = '/department/list'
      //     break
      // }
      requestUrl = '/' + payload.pageName + '/list'
      const resultData = await getPageList(requestUrl, payload.queryInfo)
      this.isLoading = false
      this[`${payload.pageName}List`] = resultData.data.list
      this[`${payload.pageName}Count`] = resultData.data.totalCount
    },
    async deletePageItemAction(payload: IDeletePayLoad) {
      let deleteUrl = ''
      switch (payload.pageName) {
        case 'users':
          deleteUrl = `/users/${payload.id}`
          break
        case 'role':
          deleteUrl = `/role/${payload.id}`
          break
        case 'goods':
          deleteUrl = `/goods/${payload.id}`
          break
        case 'menu':
          deleteUrl = `/menu/${payload.id}`
          break
        case 'department':
          deleteUrl = `/department/${payload.id}`
          break
      }
      const resultData = await deletePageData(deleteUrl)
      console.log(resultData, '删除接口调用')
      this.getPageListAction({
        pageName: payload.pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageItemAction(payload: any) {
      const { pageName, newData } = payload
      const resultData = createPageData(`/${pageName}`, newData)
      console.log(resultData, '新增接口调用')
      // 重新请求数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async updatePageItemAction(payload: any) {
      const { pageName, id, newData } = payload
      const resultData = updatePageData(`/${pageName}/${id}`, newData)
      console.log(resultData, '修改法调用')
      // 重新调用数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})
