import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return { isCollapsed: window.innerWidth < 800 }
  },
  actions: {
    exchangeCollapsed(flag: boolean) {
      this.isCollapsed = flag
    }
  }
})
