<template>
  <aside class="operation" :class="{ collapsed: isCollapsed }">
    <div class="all-type">
      <section v-for="item in typeList" :key="item.id" class="type-wrap">
        <h2>{{ item.type }}</h2>
        <div class="type">
          <div
            v-for="typeItem in item.list"
            :key="typeItem.id"
            class="type-item"
            :class="{ isActive: typeItem.isActive }"
            @click="handleExchangeType(item.id, typeItem)"
          >
            <i :class="{ iconfont: true, [typeItem.logo]: true }"></i>
            <span>{{ typeItem.name }}</span>
          </div>
        </div>
      </section>
    </div>
    <div class="trigger" @click="handleShow">
      <i class="iconfont icon-pullright"></i>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { type ImageTypeItemSub, type ImageTypeItem, ImageType } from '@/types'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
const userSettingsStore = useUserStore()
const { isCollapsed, imageTypeId } = storeToRefs(userSettingsStore)
const { exchangeCollapsed } = userSettingsStore
const handleShow = () => {
  exchangeCollapsed(!isCollapsed.value)
}
let typeList = ref<ImageTypeItem[]>([])
console.log(Object.keys(ImageType))
console.log(Object.values(ImageType))
onMounted(() => {
  typeList.value = [
    {
      type: ImageType.NaturalScenery,
      id: 1,
      list: [
        { logo: 'icon-shan', name: '山', id: 10, isActive: true },
        { logo: 'icon-he', name: '水', id: 11, isActive: false }
      ]
    },
  ]
})
const handleExchangeType = (fatherId: number, typeItem: ImageTypeItemSub) => {
  typeList.value.map((item) => {
    if (item.id === fatherId) {
      item.list.map((childItem) => {
        if (childItem.id === typeItem.id) {
          childItem.isActive = true
        } else {
          childItem.isActive = false
        }
      })
    } else {
      item.list.map((childItem) => {
        childItem.isActive = false
      })
    }
    imageTypeId.value = typeItem.id
  })
}
</script>
<style lang="scss" scoped>
@use '../styles/var';

.operation {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 20rem;
  color: var.$color;
  background-color: var.$color-bg;
  padding: 1rem;

  @media (prefers-reduced-motion: no-preference) {
    & {
      transition: transform 0.5s;
      will-change: transform;
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

  .all-type {
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #555;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #555;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    .type-wrap {
      .type {
        display: flex;
        flex-wrap: wrap;

        .type-item {
          width: 25%;
          // border: 1px solid red;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;

          i {
            font-size: 3rem;
          }
        }
        .isActive {
          background-color: red;
        }
      }
    }
  }
}
</style>
