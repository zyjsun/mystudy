<template>
  <div>
    <div class="shop-cart">
      <div class="content"  @click="clearOut">
        <div class="content-left">
          <div class="log-wrapper" :class="{ highlight: calcCount > 0 }">
            <div class="logo">
              <i
                class="icon-shopping_cart"
                :class="{ highlight: calcCount > 0 }"
              ></i>
            </div>
            <div class="num" v-show="calcCount > 0">{{ calcCount }}</div>
          </div>
          <div class="price" :class="{ highlight: calcCount > 0 }">
            {{ totalPrice }}
          </div>
          <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right">
          <div
            class="pay" 
            :class="totalPrice < minPrice ? 'notenough' : 'enough'"
          >
            {{ payDesc }}
          </div>
        </div>
      </div>
      <!-- 购物车列表 -->
      <transition name="fold"> 
        <div class="shopcart-list" v-show="this.clear&&this.car.length" >
             <!-- 遮罩层 -->
             <div class="mask"  @click="clearOut()"></div>
          <div class="list-header" >
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="menuWrapper">
            <ul>
              <li class="food" v-for="(item, index) in this.car" :key="index">
                <span class="name">{{ item.name }}</span>
                <div class="price">
                  <span>￥{{ item.price }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control :food="item"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      
      </transition>
    </div>
  </div>
</template>

<script>
import CartControl from "@/components/cart-control/cart-control";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      totalNum: 0,
      clear: false
    };
  },
  components: {
    CartControl,
  },
  props: {
    car: {
      type: Array,
      default() {
        return [];
      },
    },
    deliveryPrice: {
      type: Number,
      default() {
        return 0;
      },
    },
    minPrice: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    calcCount() {
      let count = 0;
      for (let item of this.car) {
        count += item.count;
      }
      console.log(this.car);
      return count;
    },
    totalPrice() {
      let price = 0;
      for (let item of this.car) {
        price += item.price * item.count;
      }
      return price;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}元起送`;
      } else {
        return "去结算";
      }
    },
  },
  methods: {
      _initScroll(){
        this.menuScorll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        probeType: 3,
      });
      console.log(this.menuScorll)
     
      },
    clearOut() {
        this.clear=!this.clear
         if(this.car.length>0){
        this.$nextTick(() =>{
            this._initScroll()
         })
       }
    
    },
    empty(){
        this.car.forEach(car => {
            car.count = 0
        });
        this.clear=false
    },
    topay(){
        alert(this.totalPrice+this.deliveryPrice)
    }
  },
};
</script>

<style lang="less">
.shop-cart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  .content {
    display: flex;
    background: rgba(7, 17, 27, 1);
    color: #999;
    .content-left {
      flex: 1;
      .log-wrapper {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #141d27;
        box-sizing: border-box;
        .logo {
          width: 100%;
          height: 100%;
          background: #333;
          border-radius: 50%;
          text-align: center;
          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
          }
          .icon-shopping_cart .highlight {
            color: #fff;
          }
        }
        .logo .highlight {
          background: #00a0dc;
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 10px;
          font-weight: bold;
          color: #fff;
          background: #f01414;
        }
      }
      .price {
        display: inline-block;
        line-height: 48px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
      }
      .price.highlight {
        color: #fff;
      }
      .desc {
        display: inline-block;
        line-height: 48px;
        font-size: 10px;
        margin-left: 12px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
      }
      .pay.enough {
        background: #00b43c;
        color: #fff;
      }
      .pay.not-enough {
        background: #2b333b;
      }
    }
  }
  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    transform: translate3d(0, -100%, 0);
    .mask{
      width: 100vw;
      height: 100vh;
      background: rgba(7, 17, 27, 0.6);
      z-index: 0;
  }
    .list-header {
      display: flex;
      justify-content: space-between;
      padding: 0 18px;
      height: 40px;
      line-height: 40px;
      align-items: center;
      border-bottom: 1px solid rgba(7, 17, 27, 0.2);
      background: #f3f5f7;
      .title {
        font-size: 14px;
        color: rgba(7, 17, 27);
      }
      .empty {
        font-size: 12px;
        color: #00a0dc;
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
  .shopcart-list.fold-enter-active,
  .shopcart-list.fold-leave-active {
    transition: all 0.5s;
  }
  .shopcart-list.fold-enter,
  .shopcart-list.fold-leave-to {
    transform: translate3d(0, 0, 0);
  }
}
</style>