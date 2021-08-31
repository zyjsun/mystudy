<template>
  <van-nav-bar title="我的发表"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft" />
  <div class="all">
    <div>
      <van-swipe-cell v-for="(item,index) in myArr"
                      :key="index">
        <van-card :desc="item.content"
                  :title="item.title"
                  class="goods-card"
                  :thumb="item.contentImg[0].content" />
        <template #right>
          <van-button square
                      @click="del(item._id)"
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
// import {getList} from'../../api/service/TravelNote'
import $store from '../store/index'
import { useRouter } from 'vue-router'
import { delList } from '../../api/service/TravelNote'
export default {
  setup () {
    const router = useRouter()
    const state = reactive({
      myArr: [],
      num: []
    })
    const del = async (_id) => {
      await delList({
        _id: _id
      })
      await $store.dispatch('getTrevalList')
      state.myArr = []
      for (let index = 0; index < $store.state.travelList.allNote.length; index++) {
        if ($store.state.travelList.allNote[index].author == $store.state.userInfo._user.nickname) {
          state.myArr.push($store.state.travelList.allNote[index])
          state.num.push(index)
        }
        // console.log(state.myArr);
      }
    }
    const onClickLeft = () => {
      router.back(-1)
    }
    onMounted(async () => {

      // console.log($store.state.userInfo._user.nickname);
      // console.log($store.state.travelList.allNote);
      for (let index = 0; index < $store.state.travelList.allNote.length; index++) {
        if ($store.state.travelList.allNote[index].author == $store.state.userInfo._user.nickname) {
          state.myArr.push($store.state.travelList.allNote[index])
          state.num.push(index)
        }
        // console.log(state.myArr);
      }

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