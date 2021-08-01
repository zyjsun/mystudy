<template>
  <div class="header">
    <van-search v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入目的地" />
    <div class="tab">
      <van-tabs v-model="active"
                animated
                border="true"
                lazy-render
                title-active-color='#4fc08d'>
        <van-tab title="关注">内容 1</van-tab>
        <van-tab title="游记">
          <b-note :travelList="travelList"></b-note>
        </van-tab>
        <van-tab title="想去">内容 3</van-tab>
      </van-tabs>
    </div>

  </div>
  <b-footer></b-footer>
</template>

<script>
import buttom from '../components/Footer.vue'
import note from '../components/note.vue'
import { ref, onMounted } from 'vue'
import { get } from '../../api/axios'
export default {
  components: {
    "b-footer": buttom,
    "b-note": note
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
.tab {
}
</style>