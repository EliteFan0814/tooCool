import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return { isCollapsed: false }
  },
  actions: {
    exchangeCollapsed() {
      this.isCollapsed = !this.isCollapsed
    }
  }
})
