<template>
  <aside class="operation" :class="{ collapsed: userSettingsStore.isCollapsed }">
    <div class="trigger" @click="handleShow">
      <i class="iconfont icon-pullright"></i>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { userStore } from '@/stores/user'
const userSettingsStore = userStore()
const handleShow = () => {
  userSettingsStore.exchangeCollapsed()
}
</script>
<style lang="scss" scoped>
.operation {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border: 1px solid red;
  background-color: #fff;
  width: 20%;
  @media (prefers-reduced-motion: no-preference) {
    & {
      transition: transform 0.5s;
      will-change: transform;
    }
  }

  .trigger {
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -15px;
    width: 30px;
    height: 30px;
    .iconfont {
      font-size: 30px;
      line-height: 30px;
    }
  }
  &.collapsed {
    transform: translateX(100%);
    .trigger {
      transition: transform 0.5s;
      transform: rotateY(-180deg);
      left: -30px;
    }
  }
}
</style>
