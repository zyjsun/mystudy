<template>
  <div class="header">
    <van-search v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入目的地" />
  </div>
  <div class="tab">
    <van-tabs v-model="active"
              animated
              border="true"
              lazy-render
              sticky=true
              :offset-top="50"
              title-active-color='#4fc08d'>
      <van-tab title="游记">
        <b-note :travelList="travelList"></b-note>
      </van-tab>
      <van-tab title="关注">内容 1111111111111111111111
        1111111111111111111111111111111
        1111111111111111111111111111
      </van-tab>
    </van-tabs>

  </div>
  <b-footer></b-footer>
</template>

<script>
import buttom from '../components/Footer.vue'
import note from '../components/note.vue'
import { ref, onMounted, reactive, toRefs } from 'vue'
// import { getLocal } from '../../src/common/local.js'
import { getList } from '../../api/service/TravelNote'
export default {
  components: {
    "b-footer": buttom,
    "b-note": note
  },
  setup () {
    const state = reactive({
      active: 2,
      travelList: []
    })
    let active = ref(2)
    // onMounted(() => {
    //   const token = getLocal('token')
    //   console.log(token)
    // })

    const getTrevalList = async () => {
      state.travelList = await getList()
      // console.log(state.travelList.allNote)
    }
    onMounted(() => {
      getTrevalList()
    })

    return {
      active,
      ...toRefs(state)
    };
  }



}
</script>

<style lang="less">
.header {
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  position: fixed;
  flex-direction: column;
  z-index: 1000;
}
.tab {
  position: relative;
  overflow: hidden;
  margin-top: 50px;
}
</style>