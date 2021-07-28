<template>
  <div class="products">
    <div class="products__title">
      购物车
    </div>
    <div class="products__wrapper">
      <div class="products__list">
        <div v-for="(item,index) in list"
             :key="index">
          <div v-for="cart in item.productList"
               :key="cart._id"
               class="products__item">
            <div class="product__item__checked iconfont"
                 v-html="cart.check ? '&#xe652;': '&#xe667;'" />

            <img class="
               products__item__img"
                 :src="cart.imgUrl" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{cart.name}}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__yen">&yen; </span>
                  {{cart.price}} x {{cart.count}}
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen; </span>
                  {{(cart.price * cart.count).toFixed(2)}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="order">
    <Order :allId="allId" />
  </div>

  <Docker :currentIndex="1" />
</template>

<script>
import Order from '../orderConfirmation/Order.vue'
import Docker from '../../components/Docker.vue'

import { useStore } from 'vuex'

export default {
  name: 'CartList',
  components: {
    Docker,
    Order
  },
  setup () {
    const store = useStore()
    let cartList = store.state.cartList
    let list = []
    let allId = []
    for (let item in cartList) {
      allId.push(item)
      list.push(cartList[item])
    }

    return {
      list
    }
  }


}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.products {
  background: $bgColor;
  &__title {
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.5rem;
    color: $content-fontcolor;
    background-color: $btn-bgColor;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    top: 1rem;
    bottom: 0.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
.cart {
  margin-top: 0.2rem;
  text-align: center;
}
.order {
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  width: 100%;
}
</style>