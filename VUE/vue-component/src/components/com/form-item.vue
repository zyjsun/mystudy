<template>
  <div>
    <label></label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
import AsyncValidator from 'async-validator'
export default {
  name: 'iFormItem',
  inject: ['form'],
  mixins: [ Emitter ],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      isRequire: false,
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过的提示信息
    }
  },
  mounted() {
    // 如果没有传入prop，则无需检验，也就无需缓存
    // item组件被渲染时应该把组件的实例对象派发给父组件
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  computed: {
    fieldValue() {
      return this.form.mode[this.prop]
    }
  },
  methods: {
    setRules() {
      this.$on('on-form-change', this.onFieldChange)
      this.$on('on-form-blur', this.onFieldbBlur)
    },
    // 从Form中拿到rules
    getRules() {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    // 过滤出来符合要求的rule规则
    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    // 校验数据
    validate(trigger, callback= function() {}) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        return true
      }
      // 设置状态为校验中
      this.validateState = 'validating'
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue // 表单数据
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },
    onFieldChange() {
      this.validate('change')
    },
    onFieldbBlur() {
      this.validate('blur')
    }
  },
  beforeDestroy() {
    // 组件销毁前，将实例从Form的缓存中移除
    this.dispatch('iForm', 'on-form-item-remove', this)
  }
}
</script>

<style>

</style>