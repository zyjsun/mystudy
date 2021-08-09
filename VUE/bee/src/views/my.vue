
<template>
  <div class="user-box">
    <van-skeleton title
                  avatar="true"
                  :row="3"
                  :loading="loading">
      <div class="user-info">
        <div class="info">
          <img :src="state.userInfo._user.userImg" />
          <div class="user-desc">
            <span>昵称：{{state.userInfo._user.nickname}}</span>
            <span>登录名：{{state.userInfo._user.name}}</span>
            <span class="name">个性签名：{{state.userInfo._user.signContent}}</span>
          </div>
        </div>
      </div>
    </van-skeleton>
    <ul class="user-list">
      <li class="van-hairline--bottom">
        <span>我的游记</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom">
        <span>我收藏的游记</span>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom"
          @click="manageUser">
        <span>账号管理</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>关于我们</span>
        <van-icon name="arrow" />
      </li>
    </ul>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/runtime-core'
import buttom from '../components/Footer.vue'
import { getLocal } from '../common/local'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import { getInfo } from '../../api/service/user'
export default {
  components: {
    "nav-bar": buttom
  },
  setup () {

    const loading = ref(true);
    const state = reactive({
      userInfo: {}
    }
    )
    const token = getLocal('token')
    const router = useRouter()
    const getUserInfo = async () => {
      state.userInfo = await getInfo({
        _id: token
      })
      loading.value = false;
      console.log(state.userInfo._user)
    }
    const manageUser = () => {
      router.push({
        path: '/myinfo',
        query: { "user": state.userInfo._user }
      }

      )
    }
    onMounted(() => {
      if (!token) {
        Toast('没有登录，请登录', 'fail')
        router.push({ path: '/login' })
      }
      getUserInfo()
    })

    return {
      state,
      loading,
      manageUser
    }
  }
}
</script>

<style lang="less" scoped>
.user-box {
  .user-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .user-name {
      font-size: 14px;
    }
  }
  .user-info {
    width: 94%;
    margin: 10px;
    height: 115px;
    background: linear-gradient(90deg, #1bae3b, #65c751);
    box-shadow: 0 2px 5px #329026;
    border-radius: 6px;
    .info {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      padding: 25px 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-top: 4px;
      }
      .user-desc {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        span {
          color: #fff;
          font-size: 14px;
          padding: 2px 0;
        }
      }
      .account-setting {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 13px;
        color: #fff;
        .van-icon-setting-o {
          font-size: 16px;
          vertical-align: -3px;
          margin-right: 4px;
        }
      }
    }
  }
  .user-list {
    padding: 0 20px;
    margin-top: 20px;
    li {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .van-icon-arrow {
        margin-top: 13px;
      }
    }
  }
}
</style>