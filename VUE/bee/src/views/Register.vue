<template>
  <div class="star-login">
    <div class="title">登录</div>
    <div class="login-wrapper">
      <div class="avatar">
        <img src="../../public/1.jpg"
             alt="">
      </div>
    </div>
    <div class="input-group">
      <label for="username">账号</label>
      <input type="text"
             name="username"
             placeholder="输入账号"
             v-model="username" />
    </div>
    <div class="input-group">
      <label for="password">密码</label>
      <input type="password"
             name="password"
             placeholder="输入你的密码"
             v-model="password" />
    </div>
    <div class="input-group">
      <label for="repassword">确认密码</label>
      <input type="password"
             name="repassword"
             placeholder="确认你的密码"
             v-model="repassword" />
    </div>
    <div class="sign"
         @click="onSubmit">注册</div>
    <text class="register"
          @click="toRegister">已有账号去登录</text>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
import { reactive } from 'vue'
import router from 'vue-router'
import { post } from '../../api/axios'
export default {
  setup () {
    const state = reactive({
      username: '',
      passwoed: '',
      repassword: ''
    })
    const onSubmit = () => {
      post('/register', {
        name: state.username,
        password: state.passwoed
      })
      Toast('注册成功', 'success')
    }
    const toRegister = () => {
      router.push('/login')
    }
    return {
      ...toRefs(state),
      onSubmit,
      toRegister
    }
  }
}
</script>

<style>
.star-login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 10px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
.title {
  height: 52px;
  line-height: 52px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.login-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgba(187, 180, 187, 1);
  box-shadow: 0 0 40px rgba(170, 170, 170, 1);
  overflow: hidden;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
}

.input-group {
  width: 250px;
  height: 50px;
  line-height: 50px;
  display: flex;
  margin: 0 auto;
  border: 1px solid rgba(187, 187, 187, 1);
  border-radius: 20px;
  padding-left: 20px;
  opacity: 0.5;
  margin-bottom: 20px;
}
label {
  display: inline-flex;
  width: 50px;
  color: rgba(16, 16, 16, 1);
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
input {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  padding-left: 10px;
  font-size: 18px;
}
.forgot-pwd {
  float: right;
  font-size: 10px;
  color: rgba(167, 107, 107, 0.671);
  padding-right: 45px;
}

.sign {
  display: flex;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 300px;
  height: 50px;
  color: #fff;
  background-color: rgba(16, 16, 16, 1);
}
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(216, 202, 202);
  margin-top: 100px;
}
</style>