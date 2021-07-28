<template>
  <div class="wrapper">
    <!-- 顶部页面 -->
    <TopArea />
    <!-- 商品页面 -->
    <ProductList />
    <!-- 结算页面 -->
    <Order />
  </div>
</template>

<script>
import TopArea from './TopArea'
import ProductList from './ProductList'
import Order from './Order'
export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>