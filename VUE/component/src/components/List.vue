<template>
  <div class="list">{{msg}}

    <list-child></list-child>
  </div>

</template>

<script>
import ListChild from './list-child.vue'
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    "list-child": ListChild
  }
}
</script>

<style>
</style>