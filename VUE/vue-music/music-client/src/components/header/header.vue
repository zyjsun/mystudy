<template>
  <div class="header">
    <div class="header-icon"
         @click="showside()">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showside () {
      this.$store.dispatch("setShowSidebar", true)
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/function.less";
.header {
  .px2rem(height,88);
  .px2rem(line-height,88);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .px2rem(font-size,30);
  padding: 0 10px;
}
.header-icon {
  .px2rem(width,88);
  cursor: pointer;
  .icon {
    .px2rem(font-size,48);
  }
  .header-cont {
    flex: 1;
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>