<template>
  <van-swipe class="my-swipe"
             :autoplay="3000"
             indicator-color="white">
    <van-swipe-item v-for="(item,index) in list"
                    :key="index"
                    indicator-color="#fff">
      <img :src="item.carouselUrl"
           alt="">
    </van-swipe-item>

  </van-swipe>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less">
.my-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>