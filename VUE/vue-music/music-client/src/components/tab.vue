<template>
  <div class="tab">
    <router-link tag="div"
                 class="tab-item"
                 to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div"
                 class="tab-item"
                 to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div"
                 class="tab-item"
                 to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div"
                 class="tab-item"
                 to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import "../assets/css/function.less";
.tab {
  display: flex;
  .px2rem(font-size,30);
  .px2rem(line-height,88);
  text-align: center;
  align-items: center;
  justify-content: center;
  .px2rem(height,88);
  .tab-item {
    flex: 1;
    color: #fff;
  }
  .router-link-exact-active {
    // 被点击的router-link
    color: #ea2448;
    span {
      padding: 5px 0;
      border-bottom: 2px solid #ea2448;
    }
  }
}
</style>