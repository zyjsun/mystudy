<template>
  <van-sticky :offset-top="0">
    <van-nav-bar title="我的收藏"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
  </van-sticky>
  <div class="all">
    <div>
      <van-swipe-cell v-for="(item,index) in likeArr"
                      :key="index">
        <!-- <span>{{pic}}--{{index2}}</span> -->

        <van-card :desc="item.content"
                  :title="item.title"
                  class="goods-card" />
        <img :src="item.contentImg[0].content" />
        <template #right>
          <van-button square
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import $store from '../store/index'
import { postLoveContext, getLoveContext } from '../../api/service/LoveContext'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const state = reactive({
      likeArr: []
    })
    const del = () => {
      postLoveContext({})
    }
    const onClickLeft = () => {
      router.back(-1)
    }
    onMounted(async () => {
      const loveList = await getLoveContext({
        _id: $store.state._id
      })
      Array.from(loveList.data.goodArr).forEach((item, index) => {
        if (item == true) {
          state.likeArr.push($store.state.travelList.allNote[index])
        }
      });
      console.log(state.likeArr[2].contentImg);
    })
    return {
      ...toRefs(state),
      del,
      onClickLeft
    }
  }
}
</script>

<style lang="less">
</style>