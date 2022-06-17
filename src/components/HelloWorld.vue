<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>这是和</h1>
  <div class="haha"><div class="ha">hehe</div></div>
</template>

<style lang="scss" scoped>
.haha {
  .ha {
    color: red;
  }
}
</style>
