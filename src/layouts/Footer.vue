<template>
  <footer class="footer">
    <span>范特西</span>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '../styles/var';

.footer {
  display: flex;
  justify-content: center;
  padding: 5px 15px;

  background-color: var.$color-bg;
}
</style>
