<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 父组件接受参数 -->
      <v-search-box @query="searchContent"></v-search-box>
    </div>
    <div class="search-result">
      <v-suggest :query="query"></v-suggest>
    </div>
  </div>
</template>

<script>
import searchBox from '../components/searchBox.vue'
import { searchMixin } from '@/common/js/mixin.js'
import Suggest from '@/components/suggest.vue'
export default {
  mixins: [searchMixin],
  // 把写的对象扩展到数据源(混入在一起)
  components: {
    'v-search-box': searchBox,
    'v-suggest': Suggest
  },

}
</script>

<style lang="less" scoped>
@import "../assets/css/function.less";
.search {
  overflow: hidden;
  .search-box-wrapper {
    .px2rem(margin, 40);
  }
  .shortcut-wrapper {
    position: fixed;
    .px2rem(top, 360);
    bottom: 0;
    width: 100%;
    .shortcut {
      height: 100%;
      overflow: hidden;
      .hot-key {
        .px2rem(margin-right, 40);
        .px2rem(margin-bottom, 40);
        .px2rem(margin-left, 40);
        .title {
          .px2rem(margin-bottom, 40);
          font-size: 14px;
          color: hsla(0, 0%, 100%, 0.5);
        }
        .item {
          display: inline-block;
          .px2rem(padding-top, 10);
          .px2rem(padding-bottom, 10);
          .px2rem(padding-left, 20);
          .px2rem(padding-right, 20);
          .px2rem(margin-right, 20);
          .px2rem(margin-bottom, 20);
          border-radius: 6px;
          background: #2f3054;
          font-size: 14px;
          color: hsla(0, 0%, 100%, 0.3);
        }
      }
      .search-history {
        position: relative;
        .px2rem(margin-left, 40);
        .px2rem(margin-right, 40);
        .title {
          display: flex;
          align-items: center;
          .px2rem(height, 80);
          font-size: 14px;
          color: hsla(0, 0%, 100%, 0.5);
          .text {
            flex: 1;
          }
          .clear {
            // extend-click()
            .icon {
              font-size: 18px;
              color: hsla(0, 0%, 100%, 0.3);
            }
          }
        }
      }
    }
  }
  .search-result {
    position: fixed;
    width: 100%;
    .px2rem(top, 360);
    bottom: 0;
  }
}
</style>