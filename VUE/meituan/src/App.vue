<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
</style>
