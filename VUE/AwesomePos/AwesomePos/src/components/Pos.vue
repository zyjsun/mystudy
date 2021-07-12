<template>
  <div class="pos">
    <el-row>
      <el-col :span='7'
              class="pos-order"
              id="orderList">
        我是订单栏
      </el-col>
      <el-col>
        我是产品栏
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  mounted: function () {
    var orderHeight = document.body.clientHeight
    document.getElementById('orderList').style.height = orderHeight + 'px'
  }
}
</script>

<style>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
</style>
