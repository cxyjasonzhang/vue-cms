import { defineStore } from 'pinia'
import { LoginStateType } from '../type'
import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '@/service/login/login'
import { LoginPayloadType } from '@/service/login/types'
import router from '@/router/index'
import LocalCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusPermission } from '@/utils/map-menu'
import { useRootStore } from '../root/rootStore'

export const useLoginStore = defineStore('login', {
  state: (): LoginStateType => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      userPermissions: []
    }
  },

  getters: {},

  actions: {
    async accountLoginAction(payload: LoginPayloadType) {
      const resultData = await accountLoginRequest(payload)
      console.log(resultData, 'resultData')
      const { id, token } = resultData.data
      this.token = token
      LocalCache.setCache('token', token)
      // 请求用户信息
      const userInfo = await requestUserInfoById(id)
      console.log(userInfo, 'userInfo')
      this.userInfo = userInfo.data
      LocalCache.setCache('userInfo', userInfo.data)
      // 请求用户菜单
      const userMenuResult = await requestUserMenusByRoleId(userInfo.data.role.id)
      this.userMenus = userMenuResult.data
      LocalCache.setCache('userMenus', userMenuResult.data)
      // 跳转到首页
      router.push('/main')
    },
    phoneLoginAction() {},
    // 刷新页面时重新初始化pinia中的数据
    initLocalData() {
      const rootStore = useRootStore()
      this.token = LocalCache.getCache('token') || ''
      this.userInfo = LocalCache.getCache('userInfo') || {}
      this.userMenus = LocalCache.getCache('userMenus') || []
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取当前用户所有按钮权限
      console.log(mapMenusPermission(this.userMenus))
      rootStore.getInitDataAction()
      this.userPermissions = mapMenusPermission(this.userMenus)
    },
    exitCountAction() {
      this.token = ''
      LocalCache.deleteCache('token')
      router.push('/login')
    }
  }
})
