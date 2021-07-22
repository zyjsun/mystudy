<template>
  <div class="product-detail">
    <s-header name="商品详情"></s-header>
    <div class="detail-content">
      <div class="detail-swipe-wrap">
        <van-swipe :autoplay="3000"
                   lazy-render
                   class="my-swipe">
          <van-swipe-item v-for="image in detail.goodsCarouselList"
                          :key="image">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="product-info">
        <div class="product-title">{{ detail.goodsName || ''}}</div>
        <div class="product-desc">免邮费 顺丰快递</div>
        <div class="product-price">
          <span>￥{{detail.sellingPrice || ''}}</span>
        </div>
      </div>
      <div class="product-intro">
        <ul>
          <li>概述</li>
          <li>参数</li>
          <li>安装服务</li>
          <li>常见问题</li>
        </ul>
        <div class="product-content"
             v-html="detail.goodsDetailContent || ''"></div>
      </div>
    </div>
    <!-- <van-goods-action>
      <van-goods-action-icon icon="chat-o"
                             text="客服"
                             dot />
      <van-goods-action-icon icon="cart-o"
                             text="购物车"
                             info="5"
                             @click="goToCart" />
      <van-goods-action-button text="加入购物车"
                               type="warning"
                               @click="handleAddCart" />
      <van-goods-action-button text="立即购买"
                               @click="goToPay" />
    </van-goods-action> -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o"
                           text="客服" />
      <van-action-bar-icon icon="cart-o"
                           text="购物车"
                           :badge="cartCount"
                           @click="goToCart" />
      <van-action-bar-button type="warning"
                             text="加入购物车"
                             @click="handleAddCart" />
      <van-action-bar-button type="danger"
                             text="立即购买"
                             @click="goToPay" />
    </van-action-bar>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { reactive, toRefs } from "@vue/reactivity";
import { getDetail } from "../api/service/goods";
import { addCart } from "../api/service/cart"
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
  computed: {
    cartCount () {
      const store = useStore()
      return store.state.cartCount
    }
  },
  components: {
    sHeader,
  },
  setup () {
    const route = useRoute()
    const router = useRouter();
    const store = useStore()
    console.log(router);
    const state = reactive({
      detail: {
        goodsCarouselList: [],
      },
    });
    onMounted(async () => {
      const id = route.params.id
      const { data } = await getDetail(id);
      state.detail = data
      console.log(data);
    });

    const goToCart = () => {
      router.push('/cart')
    }
    const handleAddCart = () => {
      store.commit('addCartcount')
      addCart({
        "goodsCount": 1,
        "goodsId": route.params.id
      })
      store.dispatch('updateCart')

    }
    const goToPay = () => { }
    return {
      ...toRefs(state),
      goToCart,
      handleAddCart,
      goToPay

    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.product-detail {
  .detail-header {
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
    .product-name {
      font-size: 14px;
    }
  }
  .detail-content {
    height: calc(100vh - 50px);
    overflow: hidden;
    overflow-y: auto;
    margin-top: 44px;
    .detail-swipe-wrap {
      .my-swipe .van-swipe-item {
        img {
          width: 100%;
          // height: 300px;
        }
      }
    }
    .product-info {
      padding: 0 10px;
      .product-title {
        font-size: 18px;
        text-align: left;
        color: #333;
      }
      .product-desc {
        font-size: 14px;
        text-align: left;
        color: #999;
        padding: 5px 0;
      }
      .product-price {
        .fj();
        span:nth-child(1) {
          color: #f63515;
          font-size: 22px;
        }
        span:nth-child(2) {
          color: #999;
          font-size: 16px;
        }
      }
    }
    .product-intro {
      width: 100%;
      padding-bottom: 50px;
      ul {
        .fj();
        width: 100%;
        margin: 10px 0;
        li {
          flex: 1;
          padding: 5px 0;
          text-align: center;
          font-size: 15px;
          border-right: 1px solid #999;
          box-sizing: border-box;
          &:last-child {
            border-right: none;
          }
        }
      }
      .product-content {
        padding: 0 20px;
        img {
          width: 100%;
        }
      }
    }
  }
  .van-action-bar-button--warning {
    background: linear-gradient(to right, #6bd8d8, @primary);
  }
  .van-action-bar-button--danger {
    background: linear-gradient(to right, #0dc3c3, #098888);
  }
}
</style>