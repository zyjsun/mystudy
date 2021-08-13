<template>
  <button 
    :class="'i-button-size'+size" 
    :disabled="disabled"
  >
    <slot name="icon"></slot>
    <slot>提交</slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
}
export default {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // handleClick(event) {
    //   // this.$emit('on-click', event)
    //   console.log(event);
    // }
  }
}
</script>

<style>

</style>