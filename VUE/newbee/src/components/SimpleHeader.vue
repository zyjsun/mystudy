<template>
  <div class="simple-header">
    <i class="nbicon nbfanhui"
       v-if="back"
       @click="goBack"></i>
    <i v-else>&nbsp;&nbsp;&nbsp;</i>
    <div class="simple-header-name">登录</div>
    <i class="nbicon nbmore"></i>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const router = useRouter()
    const goBack = () => {
      if (props.back) {
        router.go(-1)
      }
    }
    return { goBack }
  }
}
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.simple-header {
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
  .simple-header-name {
    font-size: 14px;
  }
}
</style>