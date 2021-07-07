<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/commet">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!-- 路由的可视化区域  把路由匹配的页面的dom界面加上-->
  </div>
</template>
<script>
import VHeader from './components/v-header/v-header.vue'
import {getSeller} from  '@/api'

export default{
   data(){
     return {
    seller: {}
     }
  },
  components:{
    VHeader
  }, 
 
  created(){
    getSeller().then(res=>{
      console.log(res)
       this.seller=res
    })
  }
}
</script>


<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  .tab{
    display: flex;
    flex-direction: row;
    height: 100%;
    line-height: 33px;
  

    .tab-wrapper{
      a{
    display: block;
    text-decoration:none;
    color: #666;}
    text-align: center;
    flex:1;
    .router-link-exact-active{
      color: #f01414;
      border-bottom: 2px solid #f01414;
    }
   }
  }

</style>
