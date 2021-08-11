<template>
  <van-nav-bar title="修改信息"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft" />
  <div class="all">

    <div class="user">
      <div class="changeImg">
        <span>修改你的头像</span>
        <van-uploader v-model="changeImg"
                      multiple />
      </div>
      <van-form @submit="updateUser">
        <van-cell-group inset>
          <van-field v-model="nickname"
                     label="你的昵称"
                     placeholder="输入你的昵称"
                     input-align="left"
                     :rules="[{ required: true, message: '昵称不能为空' }]" />
          <van-field v-model="signContent"
                     label="个性签名"
                     placeholder="输入你的个性签名"
                     input-align="left"
                     :rules="[{ required: true, message: '个性签名不能为空' }]" />
          <van-field v-model="pwd"
                     label="你的密码"
                     type="password"
                     placeholder="输入你的新密码"
                     :rules="[{ required: true, message: '密码不能为空' }]"
                     input-align="left" />
        </van-cell-group>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"
                    native-type="submit"
                    type="info"
                    size="large">
          确认修改
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/runtime-core';
import { getLocal } from '../common/local'
// import $store from '../store/index'
import { useRouter } from 'vue-router';
import { Toast } from 'vant'
import { updateInfo } from '../../api/service/user'
export default {
  setup () {
    const state = reactive({
      user: {},
      changeImg: [],
      signContent: '',
      nickname: '',
      pwd: ''
    })
    const router = useRouter()
    // state.user = $store.state.userInfo
    const onClickLeft = () => {
      router.back(-1)
    }
    const updateUser = async () => {
      if (state.changeImg.length > 1) {
        Toast.fail('图片只能上传一张')
        return
      } else if (state.changeImg.length == 0) {
        Toast.fail('图片不能为空')
        return
      }
      const token = getLocal('token')
      console.log(state.changeImg[0].content)
      await updateInfo({
        userImg: state.changeImg[0].content,
        signContent: state.signContent,
        nickname: state.nickname,
        password: state.pwd,
        _id: token
      })
      router.push({ path: '/login' })
    }

    return {
      onClickLeft,
      ...toRefs(state),
      updateUser
    }
  }

}
</script>

<style lang="less">
.all {
  background-image: url("../assets/update.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // -webkit-filter: blur(15px);
  // -moz-filter: blur(15px);
  // -o-filter: blur(15px);
  // -ms-filter: blur(15px);
  // filter: blur(15px);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user {
    height: 300px;
    .changeImg {
      margin-top: 20px;
      width: 100%;
      height: 100px;
      display: flex;
      // flex-direction: row;
      white-space: nowrap;
      overflow: hidden;
      span {
        text-align: center;
        align-items: center;
        display: inline-block;
        margin-right: 30px;
        height: 100%;
      }
    }
  }
}
</style>