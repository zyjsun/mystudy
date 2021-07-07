<template>
  <span class="support-ico" :class="iconCls"></span>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    type: {
      type: Number
    }
  },
  computed: {
    iconCls() {
      const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="less">
.support-ico{
  display: inline-block;
  background-repeat: no-repeat;  
}
.icon-1{
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
}
.icon-2{
  width: 16px;
  height: 16px;
  background-size: 12px 12px;
}
.decrease{
  background-image: url('decrease_1@2x.png');
}
.discount{
  background-image: url('discount_1@2x.png');
}
.special{
  background-image: url('special_1@2x.png');
}
.invoice{
  background-image: url('invoice_1@2x.png');
}
.guarantee{
  background-image: url('guarantee_1@2x.png');
}
</style>