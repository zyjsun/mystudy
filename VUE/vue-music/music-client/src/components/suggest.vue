<template>
  <v-scroll class="suggest"
            :pullup="pullup"
            :beforeScroll="beforeScroll"
            :pulldown="true"
            :data="result"
            @scrollToEnd="searchMore"
            @beforeScroll="listScroll">
    <ul class="suggest-list">
      <li class="suggest-item"
          v-for="(item,index) in result "
          :key="index"
          @click="select(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text1">{{getDisplayName(item)}}</p>
        </div>
      </li>
    </ul>

  </v-scroll>
</template>

<script>
import Scroll from './scroll.vue'
import api from '../common/api/index'
export default {
  data () {
    return {
      pullup: true,
      beforeScroll: true,
      page: 1,
      result: [],
      hasMore: true
    }
  },
  watch: {
    query (newValue) {
      if (!newValue) {
        return
      } else {
        this.search(newValue)
      }
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  components: {
    'v-scroll': Scroll
  },
  methods: {
    search () {
      this.page = 1;
      this.hasMore = true;
      this.result = []
      this.fetchResult(this.page)
    },
    select (item) {
      this.$store.dispatch('setHistoryList', this.query)
      this.$emit('select', item)
      // this.$emit('addHis')
    },
    // _checkMore(data){
    //   if(data.songs.length<20||((this.page-1)*20)>=data.songCount){
    //       this.hasMore=false
    //   }
    // },
    getDisplayName (item) {
      return `${item.name}--${item.artists[0] && item.artists[0].name}`
    },
    fetchResult (page) {
      const params = {
        limit: 20,
        offset: page - 1,
        keywords: this.query
      }
      api.MuscicSearch(params).then(res => {
        console.log(res)
        this.result = [...this.result, ...res.data.result.songs]
        this.hasMore = res.data.result.hasMore
      })
    },
    searchMore () {
      if (!this.hasMore) {
        return
      } else {
        this.page++
        this.fetchResult(this.page)
      }
    },
    listScroll () {

    }
  }
}
</script>

<style lang="less">
@import "../assets/css/function.less";
.suggest {
  height: 100%;
  overflow: hidden;

  .suggest-list {
    .px2rem(padding-left, 60px);
    .px2rem(padding-right, 60px);

    .suggest-item {
      display: flex;
      align-items: center;
      .px2rem(line-height, 80);
    }

    .icon {
      .px2rem(width, 60);
      font-size: 14px;
      padding: 0 10px;
      color: #fff;
    }

    .name {
      flex: 1;
      font-size: 14px;
      color: #fff;
      overflow: hidden;

      .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .loading-wraper {
      .px2rem(height, 80);
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    span {
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.3);
    }
  }
}
</style>