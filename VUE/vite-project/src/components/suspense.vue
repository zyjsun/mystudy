<template>
  <Suspense>
    <template #default>
      异步的组件
      <async :timeout="3000" />
    </template>
    <template #fallback>
      加载状态的组件....
    </template>
  </Suspense>
</template>

<script>
import async from './async.vue'
export default {
  components: {
    async
  }
}
</script>

<style>
</style>