import { defineStore } from 'pinia'
// import { type UserSettingStore } from '@/types/storeTypes'

export const useUserStore = defineStore('user', {
  state: () => {
    return { isCollapsed: window.innerWidth < 800, imageTypeId: -1 }
  },
  actions: {
    exchangeCollapsed(flag: boolean) {
      this.isCollapsed = flag
    }
  }
})
