<template>
  <div class="cart-box">
    <s-header name="购物车"></s-header>
    <div class="cart-body">
      <van-checkbox-group v-model="result">
        <van-swipe-cell :right-width="50"
                        v-for="(item, index) in list"
                        :key="index">
          <div class="good-item">
            <van-checkbox :name="item.cartItemId"></van-checkbox>
            <div class="good-img">
              <img :src="item.goodsCoverImg"
                   alt="" />
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{item.goodsName}}</span>
                <span>x{{item.goodsCount}}</span>
              </div>
              <div class="good-btn">
                <div class="price">{{item.sellingPrice}}</div>
                <van-stepper v-model="item.goodsCount"
                             integer
                             min="1"
                             max="5"
                             async-change />
              </div>
            </div>
          </div>
          <template #right>
            <van-button class="delete-button"
                        square
                        type="danger"
                        icon="delete"
                        @click="deleteCart(item.cartItemId)" />

          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="sum*100"
                    class="submit-all"
                    button-text="结算"
                    @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <navBar></navBar>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { reactive, toRefs, computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { getCart, removeCart } from '../api/service/cart'
import { Toast } from 'vant'
import navBar from '../components/NavBar.vue'
import { useStore } from 'vuex'
export default {
  components: {
    sHeader,
    navBar
  },
  setup () {
    const store = useStore()
    const deleteCart = async (e) => {
      const data = await removeCart(e)
      console.log(data)
      store.dispatch('updateCart')
    }
    const sum = computed(() => {
      let sums = 0
      for (let item in state.list) {
        // console.log(state.list)
        // console.log(state.result)

        if (state.result.includes(state.list[item].cartItemId)) {
          // console.log(state.result.includes(state.list[item].cartItemId))
          sums += state.list[item].sellingPrice * state.list[item].goodsCount
          console.log(sums)
        }
      }
      return sums
    })
    const state = reactive({
      isBack: true,
      list: [],
      result: []

    })
    onMounted(async () => {
      Toast.loading({ message: '...加载中', forbidclick: true })
      const { data } = await getCart()
      state.list = data
      console.log(state.list)
      Toast.clear()
    })
    const router = useRouter()
    router.beforeEach((to, from) => {
      // to and from are both route objects. must call `next`.
      if (from.name === '/home') {
        state.isBack = false
        console.log(state.isBack)
      }
    })
    return {
      ...toRefs(state),
      sum,
      deleteCart
    }
  }
}
</script>

<style lang="less">
@import "../common/style/mixin";
.cart-box {
  .cart-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .cart-name {
      font-size: 14px;
    }
  }
  .cart-body {
    margin: 60px 0 100px 0;
    padding-left: 10px;
    .good-item {
      display: flex;
      .good-img {
        img {
          .wh(100px, 100px);
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      width: 50px;
      height: 100%;
    }
  }
  .empty {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 200px;
    .empty-cart {
      width: 150px;
      margin-bottom: 20px;
    }
    .van-icon-smile-o {
      font-size: 50px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .submit-all {
    margin-bottom: 50px;
    .van-checkbox {
      margin-left: 10px;
    }
    .van-submit-bar__text {
      margin-right: 10px;
    }
    .van-submit-bar__button {
      background: @primary;
    }
  }
  .van-checkbox__icon--checked .van-icon {
    background-color: @primary;
    border-color: @primary;
  }
}
</style>
