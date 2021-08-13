<template>
  <div class="list-child2">{{}}</div>
</template>

<script>
import bus from '../bus.js'
export default {
  created() {
    bus.$on('sendMsg', (val) => {
      console.log(val);
    })
  }
}
</script>

<style>

</style>