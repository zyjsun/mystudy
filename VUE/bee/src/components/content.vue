<template>
  <div>
    <van-nav-bar title="游记内容"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="note">
      <div class="title">
        {{allContent.title}}
        <span>发布于{{date}}</span>
      </div>
      <div class="photo">
        <van-swipe :loop="true"
                   :height="200"
                   :autoplay="1000"
                   lazy-render
                   indicator-color="white">
          <van-swipe-item v-for="(item,index) of allContent.contentImg "
                          :key="index">
            <img :src="allContent.contentImg[index].content"
                 alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        {{allContent.content}}
      </div>
      <div class="author">
        作者
        {{allContent.author}}
        <img :src="allContent.authorImg" />
      </div>
    </div>

  </div>
</template>

<script>
import { onMounted, toRefs, reactive } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import $store from '../store/index'
export default {
  setup () {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      allContent: '',
      date: ''
    })
    const onClickLeft = () => {
      router.back(-1)
    }
    onMounted(() => {

      state.allContent = $store.state.travelList.allNote[route.params.id]
      state.date = state.allContent.meta.createAt
    })
    return {
      onClickLeft,
      ...toRefs(state)
    };
  },
}
</script>

<style lang="less">
.note {
  width: 100%;

  margin: 0 auto;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .title {
    display: flex;
    flex-direction: column;
    height: 50px;
    font-size: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    color: rgb(223, 238, 233);
    background-color: rgb(155, 211, 133);
    span {
      font-size: 10px;
      line-height: 10px;
      color: aquamarine;
      right: 0;
      top: 80px;
      position: absolute;
    }
  }
  .photo {
    img {
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    background-color: rgb(217, 238, 211);
  }
  .author {
    float: right;
    padding: 0 10px;
    line-height: 20px;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}
</style>