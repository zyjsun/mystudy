<template>
  <div class="header">
    <van-search v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入目的地" />
    <van-tabs v-model="active">
      <van-tab title="关注">内容 1</van-tab>
      <van-tab title="游记">
        <div class="travelList"
             v-for="item in travelList"
             :key="item.title">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.info}}</div>
          <div class="img"
               v-for="(pic,index) of item.imgArr"
               :key="index">
            <img :src="pic"
                 alt="">
          </div>
        </div>
      </van-tab>
      <van-tab title="想去">内容 3</van-tab>
    </van-tabs>
  </div>
  <b-footer></b-footer>
</template>

<script>
import buttom from '../components/Footer.vue'
import { ref, onMounted } from 'vue'
import { get } from '../../api/axios'
export default {
  components: {
    "b-footer": buttom
  },
  setup () {
    let active = ref(2)
    const travelList = ref([])
    const getTrevalList = async () => {
      const result = await get('/api/suggest')
      travelList.value = result
    }
    onMounted(() => {
      getTrevalList()
    })

    return {
      active,
      travelList
    };
  }



}
</script>

<style lang="less">
.header {
  display: flex;
  flex-direction: column;
}
</style>