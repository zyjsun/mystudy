<template>
  <div id="app">

    <i-Form ref="form"
            :mode="formValidate"
            :rules="ruleValidate">
      <i-form-item label="用户名"
                   prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱"
                   prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>

    </i-Form>
    <button @click="handleSubmit">提交</button>
  </div>

</template>

<script>
// import list from './components/List.vue'
// import button from './components/button.vue'
import iForm from './com/form.vue'
import iFormItem from './com/form-item.vue'
import iInput from './com/input.vue'
export default {
  name: 'App',
  components: {
    // 'i-button': button,
    // 'i-list': list
    iForm,
    iFormItem,
    iInput
  },
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{
          required: true, message: '用户名不能为空', trigger: 'blur'
        }],
        mail: [{
          required: true, message: '邮箱不能为空', trigger: 'blur'
        }, {
          type: 'email',
          message: '邮箱格式不正确'
        }]
      }
    }
  },
  methods: {
    handleClick () {
      this.$refs.handleClick()
    },
    handleSubmit () {
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
    }
  },
}
</script>

<style>
</style>
