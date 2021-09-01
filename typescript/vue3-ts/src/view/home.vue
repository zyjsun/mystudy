<template>
  <div>vuex中的count:{{count}}</div>
</template>

<script setup>

import { useStore } from 'vuex'
const store = useStore()
const count = store.state.count
</script >

<style lang="less">
</style>