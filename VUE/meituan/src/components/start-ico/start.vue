<template>
  <div class="star-wrapper">
      <!-- <div class="star" v-for="(item,index) in arr" :key="index" >
        <span class="star-item" :class="item"></span>
        </div> -->
  </div>
</template>

<script>
// function count(){
//     var count=Math.floor(this.seller.score) 
//     var arr=[]
//     for(let i=0;i<count;i++)
//        arr.push('on')
//     return arr
//     }
export default {
props:{
      seller: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    // data(){
    //    return{
           
    //    }
    // }

}
   
</script>

<style lang="less">
    .star-wrapper{
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
        .star{
            display: flex;
            justify-content: center;
            align-items: center;
            .star-item{
                background-size: 20px 20px;
                height: 20px;
                margin-right: 22px;
                width: 20px;
                background-repeat: no-repeat;
            }
            .star-item.on{
                background-image: url(./star.png);
            }
        }
    }
</style>