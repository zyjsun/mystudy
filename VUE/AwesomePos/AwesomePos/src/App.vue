<template>
  <div id="app">
    <Left-nav></Left-nav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/common/leftNav'
export default {
  components: {
    LeftNav
  }
}
</script>

<style>
#app {
}
.main {
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden;
}
</style>
