<template>
  <div>{{this.$store.state.nums}}
    {{this.$store.getters.newNumm}}
    <button @click="add">加1 </button>
    <button @click="addclick">action加2</button>
  </div>
</template>

<script>


export default {
  methods: {
    add () {
      this.$store.commit('increase', 1)
    },
    addclick () {
      this.$store.dispatch('asyncIncrease', 2)
    }
  }
}
</script>

<style>
</style>
