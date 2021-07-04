<template>
  <div id="app">
    <!-- 自定义组件 -->
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
// 数据源
const response = require('./common/data/seller.json')
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  // onload 生命周期
  created() {
    if(response.errno === 0){
      this.seller = Object.assign({}, this.seller, response.data)
    }
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>
