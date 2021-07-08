<template>
  <div class="cart-control">
    <transition name="move">
      <div class="crat-decrease">
        <span class="inner icon-remove_circle_outline"  v-show="food.count>0"  @click.stop="decreaseCart" ></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script>
export default {
    props:{
        food:{
            type: Object
        }
    },
    methods:{
        addCart(){
            if(!this.food.count){
                // this.food.count=1 响应式 往数据源植入数据
                this.$set(this.food,'count',1)
            }else{
                this.food.count++
            }
        },
        decreaseCart(){
            if(this.food.count){
                this.food.count--
            }
        }
    }
}
</script>

<style lang="less">
.cart-control{
  font-size: 0;
  .crat-decrease{
    display: inline-block;
    padding: 6px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    .inner{
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      transform: rotate(0);
      transition: all 0.4s linear;
    }
  }
  .crat-decrease.move-enter-active, 
  .crat-decrease.move-leave-active{
    transition: all 0.4s linear;
  }
  .crat-decrease.move-enter,
  .crat-decrease.move-leave-to{
    opacity: 0;
    transform: translate3d(24px, 0, 0);
    .inner{
      transform: rotate(180deg);
    }
  }
  .cart-count{
      display: inline-block;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color:rgb(147,153,159);
      vertical-align: top;
  }
  .cart-add{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color:rgb(0, 160, 220);
  }
}
</style>