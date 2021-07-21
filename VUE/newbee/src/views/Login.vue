<template>
  <div class="login">
    <sHeader :name="type==='login'?'登录':'注册'"></sHeader>
    <img class="logo"
         src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
         alt="">
    <div class="login-body login"
         v-if="type==='login'">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username1"
                     name="username"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password1"
                     type="password"
                     name="password"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="verify"
                     name="verify"
                     label="验证码"
                     placeholder="输入验证码"
                     :rules="[{ required: true, message: '请填写验证码' }]">
            <template #button>
              <vue-img-verify ref="refVerify" />
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px;">
          <div class="link-register"
               @click="toggle('register')">立即注册</div>
          <van-button round
                      block
                      type="primary"
                      color="#1baeae"
                      native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="login-body register"
         v-else>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username1"
                     name="username"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password1"
                     type="password"
                     name="password"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="verify"
                     name="verify"
                     label="验证码"
                     placeholder="输入验证码"
                     :rules="[{ required: true, message: '请填写验证码' }]">
            <template #button>
              <vue-img-verify ref="refVerify" />
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px;">
          <div class="link-login"
               @click="toggle('login')">已有账号，点击登录</div>
          <van-button round
                      block
                      type="primary"
                      color="#1baeae"
                      native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { toRefs, reactive, ref } from 'vue'
import vueImgVerify from '../components/Verify.vue'
import { login, register } from '../api/service/user'
import { Toast } from 'vant'
import { setLocal } from '../common/js/util'
import Md5 from 'js-md5'
// import { useRouter } from 'vue-router'
export default {
  components: {
    sHeader,
    vueImgVerify
  },
  setup () {
    // const router = useRouter()
    const refVerify = ref(null)
    const state = reactive({
      username1: '',
      password1: '',
      verify: '',
      type: 'login'
    });
    const onSubmit = async (values) => {
      console.log(refVerify.value.imgCode)
      console.log('submit', values);
      if (state.type === 'login') {
        if (values.verify.toUpperCase() == refVerify.value.imgCode) {
          console.log(state.username1, state.password1)
          const { data } = await login({
            loginName: values.username,
            passwordMd5: Md5(values.password)
          })
          console.log(data)
          setLocal('token', data)
          // router.push('/')
          //刷新页面，让axios.js中的token重置
          window.location.href = '/'
        } else {
          Toast.loading({
            message: '验证码错误',
            forbidClick: true,
            duration: 1000
          });
        }
      } else {
        console.log(state.type)
        await register({
          loginName: values.username,
          password: values.password
        })
        Toast.success('注册成功')
        state.type = 'login'
        state.verify = ''
      }
    };
    const toggle = (e) => {
      state.type = e
      console.log(state.type)
      state.verify = ''
    }

    return {
      ...toRefs(state),
      onSubmit,
      refVerify,
      toggle
    };
  }
}
</script>

<style lang="less">
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>