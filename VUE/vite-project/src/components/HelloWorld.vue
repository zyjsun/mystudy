<template>
  <h1>{{ state.count }}*2=={{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
</template>

<script>
import { reactive, computed, ref, onMounted } from 'vue' //更利于tree-shaking
export default {
  setup () {//入口函数
    const { state, double } = useCounter(1)
    function add () {
      state.count++
      num.value += 10
    }
    const num = ref(2)
    onMounted(() => {
      console.log('mounted')
    })
    return {
      state,
      add,
      double,
      num
    }
  }
}
function useCounter (count, n) {
  const state = reactive({
    count: count
  })
  const double = computed(() => state.count * 2)
  return { state, double }
}
</script>

<style>
</style>