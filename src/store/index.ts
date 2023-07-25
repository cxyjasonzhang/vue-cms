import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      uName: 'joke',
      age: 18,
      user: {
        isLogin: false
      }
    }
  },

  getters: {
    getFullName: (state) => {
      return state.uName + ' ' + state.age
    }
  },

  actions: {
    loginAction() {
      this.user.isLogin = true
    }
  }
})
