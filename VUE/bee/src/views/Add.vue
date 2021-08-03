<template>
  <div>
    <van-form @submit="onSubmit">
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
        <van-field v-model="authorName"
                   label="你的昵称"
                   name="authorName"
                   placeholder="请输入作者名"
                   :rules="[{ required: true, message: '请输入你的名字' }]" />
      </van-cell-group>
      <van-uploader :after-read="afterRead"
                    :rules="[{ required: true, message: '请上传你的照片' }]" />
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
import { reactive, toRefs } from 'vue'
import { post } from '../../api/axios'
import { useRouter } from 'vue-router'
export default {
  components: {
    "b-footer": buttom
  },
  setup () {
    const state = reactive({
      title: '',
      content: '',
      img: '',
      authorName: ''
    })
    const router = useRouter()
    const afterRead = (file) => {
      state.img = file
      console.log(state.img)
    }
    const onSubmit = async (values) => {
      console.log('submit', values);
      await post('/api/suggest', {
        title: values.title,
        info: values.content,
        imgArr: state.img,
        Author: {
          author: values.authorName,
          nums: '20浏览 2留言'
        }
      })
      router.push('/')
    }
    return {
      afterRead, onSubmit, ...toRefs(state)
    }
  }
}
</script>

<style>
</style>