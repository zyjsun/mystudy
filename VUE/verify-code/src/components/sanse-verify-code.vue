<template>
  <div class="vcWrap">
    <input type="text"
           maxlength="1"
           v-for="n in 4"
           :key="'codeInput' + n"
           v-model.trim.number="code[n-1]"
           :ref="'codeInput' + n"
           @keydown="onKeydown(n, $event)"
           @keyup="onKeyup(n, $event)">
  </div>
</template>

<script>
export default {
  name: 'SanseVerifyCode',
  data () {
    return {
      code: new Array(4),
      keyCodes: [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
        8,
        13
      ]
    }
  },
  methods: {
    onKeydown (n, event) {
      console.log(event.keyCode, n, this.code[n - 1]);
      if (!this.keyCodes.includes(event.keyCode)) {
        event.returnValue = false
      } else if (event.keyCode === 8 && n > 1 && !this.code[n - 1]) {
        this.$refs['codeInput' + (n - 1)][0].focus()
        event.returnValue = false
      }
    },
    onKeyup (n, event) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if (n < 4) this.$refs['codeInput' + (n + 1)][0].focus()
        this.$emit('sendCodeInput', this.code.join(''))
      } else if (event.keyCode === 8) {
        this.$emit('sendCodeInput', this.code.join(''))
      } else if (event.keyCode === 13) {
        if (this.code.join('').length === 4) this.$emit('goNext')
      }
    }
  }
}
</script>

<style lang="less">
.vcWrap {
  input {
    width: 40px;
    height: 40px;
    line-height: 40px;
    -webkit-appearance: none;
    background-color: #eee;
    border: 1px solid #eee;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    padding: 0 14px;
    outline: 0;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.335, 1);
    border-radius: 4px;
    margin-right: 1em;
  }
  input:last-child {
    margin-right: 0;
  }
}
</style>