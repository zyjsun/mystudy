<template>
  <div class="login">
    <sHeader></sHeader>
    <img class="logo"
         src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
         alt="">
    <div class="login-body login ">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username1"
                     name="用户名"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password1"
                     type="password"
                     name="密码"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="verify"
                     name="验证码"
                     label="验证码"
                     placeholder="输入验证码"
                     :rules="[{ required: true, message: '请填写验证码' }]">
            <template>
              <div>
                验证码
              </div>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px;">
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
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { toRefs, reactive } from 'vue'
export default {
  components: {
    sHeader
  },
  setup () {
    const state = reactive({
      username1: '',
      password1: '',
      verify: ''
    });
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      ...toRefs(state),
      onSubmit,
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