<template>
  <header class="header">
    <Logo :size="3.5"></Logo>
    <h2>图库</h2>
  </header>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
</script>

<style lang="scss" scoped>
@use '../styles/var';
.header {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: var.$color;
  background-color: var.$color-bg;
  h2 {
    padding-left: 1rem;
  }
}
</style>
