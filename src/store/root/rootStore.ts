import { defineStore } from 'pinia'
import { IRootState } from './types'
import { getPageList } from '@/service/main/system/system'

export const useRootStore = defineStore('root', {
  state: (): IRootState => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },

  getters: {},

  actions: {
    async getInitDataAction() {
      const departmentResult = await getPageList('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      this.entireDepartment = departmentList
      const roleResult = await getPageList('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data
      this.entireRole = roleList
      const menuResult = await getPageList('/menu/list', {})
      const { list: menuList } = menuResult.data
      this.entireMenu = menuList
    }
  }
})
