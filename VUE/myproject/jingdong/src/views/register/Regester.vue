<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/near.png"
         alt=""
         class="wrapper__img">
    <div class="wrapper__input">
      <input type="text"
             class="wrapper__input__content"
             placeholder="请输入账号">
    </div>
    <div class="wrapper__input">
      <input type="password"
             class="wrapper__input__content"
             placeholder="请输入密码">
    </div>
    <div class="wrapper__input">
      <input type="password"
             class="wrapper__input__content"
             placeholder="确认密码">
    </div>
    <div class="wrapper__register-button"
         @click="handleRegister">注册</div>
    <div class="wrapper__register-link"
         @click="handleLoginClick">已有账号去注册</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter();
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
  }
}

</script>

<style lang="scss">
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid $content-notice-fontcolor;
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      font-size: 0.16rem;
      background: none;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 $content-notice-fontcolor;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>