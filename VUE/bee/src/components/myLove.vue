<template>
  <div>123</div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import $store from '../store/index'
export default {
  setup () {
    const state = reactive({
      likeArr: []
    })
    onMounted(() => {
      // const _id = $store.state._id
      // const arr = $store.state.loveArr
      console.log($store.state.loveArr)
      // state.likeArr = $store.commit('getLoveList')

      // console.log(_id, arr);
      // console.log(state.likeArr);
    })
    return {
      ...toRefs(...state)
    }
  }
}
</script>

<style>
</style>