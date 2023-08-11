import { defineStore } from 'pinia'
import { IRootState } from './types'
import { getPageList } from '@/service/main/system/system'

export const useRootStore = defineStore('root', {
  state: (): IRootState => {
    return {
      entireDepartment: [],
      entireRole: []
    }
  },

  getters: {},

  actions: {
    async getInitDataAction() {
      const departmentResult = await getPageList('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageList('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data
      this.entireDepartment = departmentList
      this.entireRole = roleList
    }
  }
})
