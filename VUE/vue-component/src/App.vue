<template>
  <div id="app">
    <!-- <i-button size="large" id="btn1" class="btn-submit" @click.native="handleClick">
      <i slot="icon">🔍</i>
      按钮1
    </i-button>
    <i-button>按钮2</i-button>
    
    <list></list> -->
    <i-form ref="form" :mode="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
<!-- 
      <i-form-item label="年龄" prop="age">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item> -->
    </i-form>
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
// import Button from './components/button.vue'
// import List from './components/list.vue'
import iForm from './components/com/form.vue'
import iFormItem from './components/com/form-item.vue'
import iInput from './components/com/input.vue'
export default {
  name: 'App',
  data() {
    return {
      // content: '这是app里面的数据'
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        age: [
          {}
        ]
      }
    }
  },
  provide: {
    content: '这是app里面的数据'
  },
  components: {
    // 'i-button': Button,
    // List
    iForm,
    iFormItem,
    iInput
  },
  methods: {
    // handleClick(event) {
    //   console.log(event);
    // },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid);
          window.alert('提交成功')
        } else {
          window.alert('表单验证失败')
        }
      })
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
