<template>
  <h1>这是一个异步的小组件</h1>
</template>

<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: true
    }
  },
  async setup (props) {
    await sleep(props.timeout)
  }
}

function sleep (timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
</script>

<style>
</style>