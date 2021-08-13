<template>
  <input type="text"
         @input="handleInput"
         @blur="handBlur"
         :value="currentValue">
</template>

<script>
import Emmiter from '../mixins/emitter.js'
export default {
  name: 'iInput',
  mixins: [Emmiter],
  data () {
    return {
      currentValue: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handBlur () {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  },
}
</script>

<style>
</style>