<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 父组件接受参数 -->
      <v-search-box @query="searchContent"
                    :refresh="name"></v-search-box>
    </div>
    <div class="search-result"
         v-show="query">
      <v-suggest :query="query"
                 @select="saveSearch"></v-suggest>
      <!-- @select="addHis" -->
    </div>
    <!-- 热门搜索,历史搜索记录 -->
    <div class="shortcut-wrapper"
         v-show="!query">
      <v-scroll class="shortcut">
        <div>
          <div class="hot-key">
            <div class="title">热门搜索</div>
            <ul>
              <li class="item"
                  v-for="(item,index) in hotKey "
                  :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear"
                    @click="clearAll">
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 历史记录 -->
            <v-search-list :searches="searchHistory"
                           @query="search"></v-search-list>
          </div>
        </div>
      </v-scroll>
    </div>

  </div>
</template>

<script>
import searchBox from '../components/searchBox.vue'
import { searchMixin } from '@/common/js/mixin.js'
import Suggest from '@/components/suggest.vue'
import Scroll from '../components/scroll.vue'
import api from '../common/api/index'
import searchList from '../components/searchList.vue'
import { mapGetters } from "vuex"
export default {
  mixins: [searchMixin],
  // 把写的对象扩展到数据源(混入在一起)
  components: {
    'v-search-box': searchBox,
    'v-suggest': Suggest,
    'v-scroll': Scroll,
    'v-search-list': searchList
  },
  data () {
    return {
      hotKey: [],
      name: ''
    }
  },
  created () {
    this._getHotKey();
  },
  methods: {
    _getHotKey () {
      api.HotSearchKey().then(res => {
        console.log(res)
        this.hotKey = res.data.result.hots.slice(0, 10)
      })
    },
    clearAll () {
      this.$store.dispatch('clearHistoryList')
    },
    saveSearch (song) {
      //拿到选中的这首歌
      console.log(song);
      this.$store.dispatch('selectPlaySong', song)
      //保存历史记录
    },
    search (e) {
      this.name = e
    }
    // addHis () {
    //   this.$store.dispatch("setHistoryList",this.query)
    // }
  },
  computed: {
    ...mapGetters(["searchHistory"])
  }

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