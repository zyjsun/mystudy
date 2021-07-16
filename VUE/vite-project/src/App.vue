<template>
  <div class="confirm-modal">
    <button @click="isOPen=true">打开</button>
    <Teleport to="#footer">
      <div v-if="isOPen">
        <p>xixxxxxxxxxxxxxxx</p>
        <button @click="isOPen=false">取消</button>
      </div>
    </Teleport>
  </div>
  <asyncComponent />
</template>

<script>
import asyncComponent from './components/suspense.vue'
import { ref } from 'vue'
export default {
  components: {
    asyncComponent
  },
  setup () {
    const isOPen = ref(false)
    return {
      isOPen
    }
  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
