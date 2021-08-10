<template>
  <div class="all">
    <div class="user">
      <img :src="user.userImg"
           alt="">
      <span class="nickname">{{user.nickname}}</span>
    </div>
    <div class="content">
      {{user.signContent}}
    </div>

  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core';
import $store from '../store/index'
export default {
  setup () {
    let user = reactive({})
    onMounted(() => {
      user = $store.state.userInfo
      console.log(user);
    })
    return {
      user
    }
  }

}
</script>

<style>
</style>