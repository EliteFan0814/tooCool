<script setup lang="ts">
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import ImgGround from '@/layouts/ImgGround.vue'
import Operation from '@/layouts/Operation.vue'
import { userStore } from '@/stores/user'
import { onMounted } from 'vue'
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
    <!-- <div class="app">
      <div class="app-main" :class="{ collapsed: userSettingsStore.isCollapsed }">
        <Header></Header>
        <ImgGround></ImgGround>
        <Footer></Footer>
      </div>
      <Operation></Operation>
    </div> -->
    <div class="app-loading">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
[v-cloak].app-loading {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
      &:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #fff;
        margin: -4px 0 0 -4px;
      }
      &:nth-child(1) {
        animation-delay: -0.036s;
        &:after {
          top: 63px;
          left: 63px;
        }
      }
      &:nth-child(2) {
        animation-delay: -0.072s;
        &:after {
          top: 68px;
          left: 56px;
        }
      }
      &:nth-child(3) {
        animation-delay: -0.108s;
        &:after {
          top: 71px;
          left: 48px;
        }
      }
      &:nth-child(4) {
        animation-delay: -0.144s;
        &:after {
          top: 72px;
          left: 40px;
        }
      }
      &:nth-child(5) {
        animation-delay: -0.18s;
        &:after {
          top: 71px;
          left: 32px;
        }
      }
      &:nth-child(6) {
        animation-delay: -0.216s;
        &:after {
          top: 68px;
          left: 24px;
        }
      }
      &:nth-child(7) {
        animation-delay: -0.252s;
        &:after {
          top: 63px;
          left: 17px;
        }
      }
      &:nth-child(8) {
        animation-delay: -0.288s;
        &:after {
          top: 56px;
          left: 12px;
        }
      }
    }
  }
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
