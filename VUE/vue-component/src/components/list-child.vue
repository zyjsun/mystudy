<template>
  <div class="list-child" @click="changeTitle">{{title}} -- {{content}}</div>
</template>

<script>
import bus from '../bus.js'
export default {
  inject: ['content'],
  provide: {
    child: '这是child1里面的数据'
  },
  data() {
    return {
      title: 'child',
      message: '这是child1里面的数据'
    }
  },
  methods: {
    changeTitle() {
      // this.title = 'hello world'
      // console.log(this.$parent.msg);
      bus.$emit('sendMsg', this.message)
    }
  }
}
</script>

<style>

</style>