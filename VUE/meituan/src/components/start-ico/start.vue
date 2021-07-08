<template>
  <div class="star-wrapper" >
      <div class="star" v-for="(item,index) in arr" :key="index" >
        <span class="star-item " :class="item"></span>
        </div>
  </div>
</template>

<script>
export default {
props:{
      seller: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        arr : []
      }
    },
    created(){
          console.log(Math.floor(this.seller.score))
          for(let i=0;i<5;i++){
            if(i<Math.floor(this.seller.score)){
              this.arr.push('on')
            }else{
              this.arr.push('')
            }
          }
          console.log(this.arr)
        
    }
    // data(){
    //    return{
           
    //    }
    // }

}
   
</script>

<style lang="less">
    .star-wrapper{
      display: flex;
        width: 100%;
        height: 100%;
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
         justify-content: center;
            align-items: center;
        .star{
          display: flex;
            .star-item{
                background-size: 20px 20px;
                height: 20px;
                margin-right: 22px;
                width: 20px;
                background-repeat: no-repeat;
                 background-image: url(./gray.png);
            }
            .star-item.on{
                background-image: url(./star.png);
            }
        }
    }
</style>