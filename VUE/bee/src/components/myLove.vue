<template>
  <van-nav-bar title="我的收藏"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft" />
  <div class="all">
    <div>
      <van-swipe-cell v-for="(item,index) in likeArr"
                      :key="index">
        <van-card :desc="item.content"
                  :title="item.title"
                  class="goods-card"
                  :thumb="item.contentImg[0].content" />
        <template #right>
          <van-button square
                      @click="del(index)"
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
import { delLoveContent, getLoveContext } from '../../api/service/LoveContext'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const state = reactive({
      likeArr: [],
      num: []
    })
    const del = async (index) => {
      await delLoveContent({
        _id: $store.state._id,
        index: state.num[index]
      })
      const loveList = await getLoveContext({
        _id: $store.state._id
      })
      state.likeArr = []
      Array.from(loveList.data.goodArr).forEach((item, index) => {
        if (item == true) {
          state.likeArr.push($store.state.travelList.allNote[index])
          state.num.push(index)
        }
      });
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
          state.num.push(index)
        }
      });
      // console.log(loveList.data);
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
.delete-button {
  height: 100%;
}
</style>