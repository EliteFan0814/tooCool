<script lang="ts" setup>
import LogoSvg from '@/assets/logo.svg'
const props = withDefaults(defineProps<{ size?: number }>(), { size: 2.5 })
</script>

<template>
  <img :src="LogoSvg" alt="logo" :style="{ width: `${props.size}rem`, height: `${props.size}rem` }" />
</template>

<style lang="scss" scoped>
img {
  width: 4rem;
  height: 4rem;
}
</style>
