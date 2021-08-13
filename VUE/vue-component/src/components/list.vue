<template>
  <div class="list" @click="listClick">
    {{msg}}

    <list-child ref="child"></list-child>
    <list-child2></list-child2>
  </div>
</template>

<script>
import ListChild from './list-child.vue'
import ListChild2 from './list-child2.vue'
export default {
  data() {
    return {
      msg: 'list'
    }
  },
  provide: {
    content: '这是list里面的数据'
  },
  components: {
    ListChild,
    ListChild2
  },
  methods: {
    listClick() {
      // console.log(this.$children[0].title);
    }
  }
}
</script>

<style>

</style>