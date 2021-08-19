<template>
  <div>
    <van-nav-bar title="我的收藏"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <div v-for="(item,index) in likeArr"
         :key="index">
      <van-swipe-cell>
        <van-card num="2"
                  price=""
                  desc=item
                  title="游记标题"
                  class="goods-card"
                  :thumb=item.contentImg />
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
      console.log(state.likeArr);
    })
    return {
      ...toRefs(state),
      del,
      onClickLeft
    }
  }
}
</script>

<style>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>