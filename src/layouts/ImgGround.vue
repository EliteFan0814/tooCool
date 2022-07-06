<template>
  <div class="img-ground">
    <div class="img-wrap">
      <img src="https://dummyimage.com/2200x900/000/fff" alt="" />
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

<style lang="scss">
.img-ground {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
