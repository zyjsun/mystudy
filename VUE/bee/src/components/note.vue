<template>
  <div class="TL">
    <div class="travelList"
         v-for="(item,index) in travelList.allNote"
         :key="index">
      <div class="title">{{item.title}}</div>
      <div class="img">
        <div v-for="(img,index) in item.contentImg"
             :key="index">
          <img :src="img.content"
               alt="">
        </div>
      </div>

      <div class="content">{{item.content}}</div>
      <div class="Author">
        作者:
        <img :src="item.authorImg"
             alt="">
        <span>{{item.author}}</span>
        <span class="author">{{item.meta.createAt}}</span>
      </div>
      <div class="function">
        <van-icon name="like-o"
                  class="love"
                  size="25"
                  :class="{'active':headerlove}"
                  @click="like" />
        <van-icon name="down"
                  size="25"
                  @click="showContent" />
        <van-icon name="good-job-o"
                  size="25"
                  class="hand"
                  :class="{'active':header}"
                  @click="good(index)" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { debounce } from '../common/util'
import { goods } from '../../api/service/TravelNote'
import $store from '../store/index'
import { onMounted } from '@vue/runtime-core'
import { Toast } from 'vant'
export default {
  props: ['travelList'],
  setup (props) {
    const state = reactive({
      headerlove: false,
      header: false,
      allNote: props.allNote,
      num: [],
      id: ''
    })
    const good = (index) => {
      if ($store.state._id) {
        state.header = !state.header
        debounce(async () => {
          state.num[index]++
          await goods({
            num: state.num
          })
        }, 1000)
      } else {
        Toast('登陆后即可点赞', 'fail')
      }
    }
    const like = () => {
      state.headerlove = !state.headerlove
    }
    onMounted(() => {
      console.log(props.travelList.allNote, state.allNote)
      // for (let i = 0; i < props.travelList.allNote.length; i++) {
      //   state.num[i] = props.travelList.allNote[i].nums
      // }

      console.log($store.state._id)
    })
    return {
      ...toRefs(state),
      good,
      like
    }
  }
}
</script>

<style lang="less">
.TL {
  width: 90vw;
  margin: 0 auto;
  .travelList {
    border-radius: 20px solid yellowgreen;
    width: 100%;
    margin-bottom: 20px;
    .img {
      display: flex;
      flex-direction: row;
      height: 80px;
      img {
        display: block;
        margin-right: 5px;
        height: 80px;
        overflow: hidden;
      }
    }
    .title {
      font-size: 20px;
      color: yellowgreen;
    }
    .content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .function {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .hand.active {
        background: aquamarine;
      }
      .love.active {
        background: rgb(182, 36, 36);
      }
    }
    .Author {
      line-height: 25px;
      width: 100%;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
      .author {
        float: right;
      }
    }
  }
}
</style>