<template>
  <button :class="'i-button-size'+size"
          :disabled="disabled"
          @click="handleClick">
    <!-- @click="handleClick" -->
    <slot name="icon"></slot>
    <slot>提交</slot>
  </button>
</template>
    <!-- <i-button size="large"
              id="btn1"
              class="btn-submit"
              @click=" handleClick">
      <!-- @on-click=" handleClick " -->
    <!--  @click.native="handleClick"父组件给子组件添加addeventListen
      <i slot="icon">🔍</i> 按钮一
    </i-button>
    <i-button disabled>按钮二</i-button>
    <i-list></i-list>
  </div> -->
<script>
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      // this.$emit('on-click', event)
      // console.log(event)
      console.log(1)
    }
  },
}
</script>

<style>
</style>