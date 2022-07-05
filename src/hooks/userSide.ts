import { computed } from 'vue'
import { userStore } from '@/stores/user'
const userSettingsStore = userStore()

// export default function userSide() {
//   const isCollapsed = computed(() => userSettingsStore.isCollapsed)
//   return { isCollapsed }
// }

export const isCollapsed = computed(() => userSettingsStore.isCollapsed)
