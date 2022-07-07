import { defineStore } from 'pinia'
// import { type UserSettingStore } from '@/types/storeTypes'

export const userStore = defineStore('user', {
  state: () => {
    return { isCollapsed: window.innerWidth < 800, imageTypeId: undefined }
  },
  actions: {
    exchangeCollapsed(flag: boolean) {
      this.isCollapsed = flag
    }
  }
})
