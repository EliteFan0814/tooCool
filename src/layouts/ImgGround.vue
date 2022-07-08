<template>
  <div class="img-ground">
    <div class="img-wrap">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="exchange">
      <span class="pre reverse">
        <i class="iconfont icon-pullright"></i>
      </span>
      <span class="next">
        <i class="iconfont icon-pullright"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
const userSettingsStore = useUserStore()

let imgUrl = ref('https://dummyimage.com/2200x900/000/fff')
userSettingsStore.$subscribe((mutation, state) => {
  console.log(mutation.type, mutation.storeId, state)
  switch (state.imageTypeId) {
    case 10:
      imgUrl.value = 'https://dummyimage.com/200x900/000/fff'
      break
    case 11:
      imgUrl.value = 'https://dummyimage.com/211x900/000/fff'
      break
    case 20:
      imgUrl.value = 'https://dummyimage.com/200x1520/000/fff'
      break
    case 21:
      imgUrl.value = 'https://dummyimage.com/500x220/000/fff'
      break
    default:
      imgUrl.value = 'https://dummyimage.com/200x221/000/eee'
  }
})
</script>
<style lang="scss">
.img-ground {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  .img-wrap {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .exchange {
    .pre,
    .next {
      display: inline-block;
      cursor: pointer;
      padding: 0 1rem;
    }
    .reverse {
      transform: rotateY(-180deg);
    }
    .icon-pullright {
      font-size: 2rem;
    }
  }
}
</style>
