<template>
  <aside class="operation">
    <div class="trigger" @click="handleShow">
      <i class="iconfont icon-pullright"></i>
    </div>
  </aside>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.operation {
  position: relative;
  border: 1px solid red;
  width: 20%;
  .trigger {
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -15px;
    .iconfont {
      font-size: 30px;
    }
  }
}
</style>
