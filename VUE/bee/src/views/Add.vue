<template>
  <div class="all">

    <van-form @submit="onSubmit">
      <div class="content">
        <van-cell-group inset>
          <van-field v-model="title"
                     label="游记标题"
                     name="title"
                     placeholder="请输入标题"
                     size=large
                     :rules="[{ required: true, message: '标题不能为空' }]" />
          <van-field v-model="content"
                     label="游记内容"
                     name="content"
                     placeholder="请输入游记内容"
                     :rules="[{ required: true, message: '输入游记内容不能为空' }]" />

        </van-cell-group>
      </div>
      <div class="photo">
        <span>你的风景</span>
        <van-uploader v-model="fileList"
                      multiple />
      </div>

      <div style="margin: 16px; color: yellowgreen">
        <van-button round
                    block
                    type="info"
                    native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>

  <b-footer></b-footer>
</template>

<script>
import buttom from '../components/Footer.vue'
import { reactive, toRefs, onMounted } from 'vue'
import { add } from '../../api/service/TravelNote.js'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from 'vant'
export default {
  components: {
    "b-footer": buttom
  },
  setup () {
    const state = reactive({
      title: '',
      content: '',
      fileList: [],
      userInfo: {},
      nums: 0
    })
    const router = useRouter()
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('getUser')
      state.userInfo = store.state.userInfo
      if (state.userInfo == {}) {
        Toast('没有登录，请登录', 'fail')
        router.push({ path: '/login' })
      }
    })
    const onSubmit = async (values) => {

      await add({
        title: values.title,
        content: values.content,
        contentImg: state.fileList,
        goodnums: state.nums,
        author: state.userInfo._user.nickname,
        authorImg: state.userInfo._user.userImg
      })
      router.push({ path: '/' })
    }
    return {
      onSubmit, ...toRefs(state)
    }
  }
}
</script>

<style scoped lang='less'>
.all {
  margin: 0 auto;
  background-image: url("../assets/add.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    margin-top: 50px;
  }
  .photo {
    margin-top: 20px;
    width: 100%;
    span {
      display: inline-block;
      padding: 25px;
      color: aquamarine;
    }
  }
}
</style>