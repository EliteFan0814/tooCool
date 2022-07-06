<script setup lang="ts">
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import ImgGround from '@/layouts/ImgGround.vue'
import Operation from '@/layouts/Operation.vue'
import { userStore } from '@/stores/user'
import { onMounted } from 'vue'
import loading from '@/assets/imgs/loading.gif'
const userSettingsStore = userStore()
onMounted(() => {
  window.onresize = () => {
    if (window.innerWidth > 800) {
      userSettingsStore.exchangeCollapsed(false)
    } else {
      userSettingsStore.exchangeCollapsed(true)
    }
  }
})
</script>

<template>
  <main v-cloak>
    <div class="app">
      <div class="app-main" :class="{ collapsed: userSettingsStore.isCollapsed }">
        <Header></Header>
        <ImgGround></ImgGround>
        <Footer></Footer>
      </div>
      <Operation></Operation>
    </div>
    <div class="app-loading">
      <img :src="loading" alt="" />
      <span class="loading-tips">加载中......</span>
    </div>
  </main>
</template>

<style lang="scss">
.app-loading {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 40rem;
  }
  .loading-tips {
    color: #fff;
  }
}
[v-cloak].app-loading {
  display: flex;
}
[v-cloak].app {
  .app-main {
    display: none;
  }
}
.app {
  overflow: hidden;
  .app-main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-right: 20rem;
    @media (prefers-reduced-motion: no-preference) {
      & {
        transition: padding-right 0.5s;
        will-change: padding-right;
      }
    }
  }
  .collapsed {
    padding-right: 0rem;
  }
}
</style>
