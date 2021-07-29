<template>
  <div>
    ..................+++++++++++++++++++++++
    >>>>>>>>>>>>>>>>>>>>>
    <h1>111111111</h1>
  </div>
</template>

<script>
export default {
  setup () {
    const testFunction = () => {
      console.log('babel')
    }
    testFunction()
    return {
      testFunction
    }
  }
}
</script>

<style>
div {
  color: yellowgreen;
}
</style>