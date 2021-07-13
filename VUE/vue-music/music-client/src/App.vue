<template>
  <div id="app">
    <v-header>
      <i class="icon"
         slot="left-icon">&#xe692;</i>
      <span slot="content">网易云</span>
      <i class="icon"
         slot="right-icon">&#xe63c;</i>
    </v-header>
    <v-tab></v-tab>
    <v-menu></v-menu>
    <!-- 菜单 -->
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Menu from '@/components/menu'
import Tab from '@/components/tab'
export default ({
  data () {
    return {

    }
  },
  components: {
    'v-header': Header,
    'v-menu': Menu,
    'v-tab': Tab
  },

})
</script>

<style lang="less">
@font-face {
  font-family: "icon";
  /* project id 277165 */
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot");
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg");
}

.icon {
  font-family: "icon" !important;
  font-size: 18px;
  font-style: normal;
  color: #ffffff;
}

html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
