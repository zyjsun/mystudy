<template>
  <div class="travelList"
       v-for="item in travelList"
       :key="item.title">
    <div class="title">{{item.title}}</div>
    <div class="content">{{item.info}}</div>
    <div class="img"
         v-for="(pic,index) of item.imgArr"
         :key="index">
      <img :src="pic"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['travelList']
}
</script>

<style lang="less">
.travelList {
  width: 100vw;
  border-radius: 20px solid yellowgreen;
  .title {
  }
}
</style>