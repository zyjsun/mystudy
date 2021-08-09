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
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const user = route.query.user
    return {
      user
    }
  }

}
</script>

<style>
</style>