<template>
  <div class="TL">
    <div class="travelList"
         v-for="(item,index) in travelList.allNote"
         :key="index">
      <div class="title">{{item.title}}</div>
      <div class="img">
        <div v-for="(img,index) in item.contentImg"
             :key="index">
          <img :src="img.content"
               alt="">
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="Author">
        作者:
        <img :src="item.authorImg"
             alt="">
        <span>{{item.author}}</span>
        <span class="author">{{item.meta.createAt}}</span>
      </div>
      <div class="goodcontent">
        <span>点赞数{{goodnums[index]}}</span>
        <span>点赞者：</span>
        <div v-for="(pic,index2) of goodImg[index]"
             :key="index2">
          <img :src="pic"
               v-if="isgood[index]=='true'"
               alt="">
        </div>
      </div>
      <div class="function">
        <van-icon name="like-o"
                  class="love"
                  size="25"
                  :class="{'active' :headerlove[index]==true}"
                  @click="like(index)" />
        <van-icon name="closed-eye"
                  size="25"
                  @click="showContent(index)" />
        <van-icon name="good-job-o"
                  size="25"
                  class="hand"
                  :class="{'active': isgood[index]=='true'}"
                  @click="good(index,item)" />
      </div>

    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { debounce } from '../common/util'
import { goods } from '../../api/service/TravelNote'
import $store from '../store/index'
import { onMounted } from '@vue/runtime-core'
import { Toast } from 'vant'
import { sendGoodImg, getGoodImg } from '../../api/service/GoodImage'
import { useRouter } from 'vue-router'
import { postLoveContext, getLoveContext } from '../../api/service/LoveContext'
export default {
  props: {
    travelList: {
      type: Object
    }
  },
  setup () {//不能修改
    const router = useRouter()
    const state = reactive({
      headerlove: [],
      List: {},
      id: '',
      goodnums: $store.state.goodnums,
      isgood: [],
      goodImg: [],
      userName: []
    })
    //点赞
    const good = (index, item) => {
      if ($store.state._id) {
        const _id = item._id
        if (!state.goodImg[index].includes($store.state.userInfo._user.userImg) ||
          !state.userName[index].includes($store.state.userInfo._user.name)) {
          state.goodImg[index].push($store.state.userInfo._user.userImg)
        }
        debounce(async () => {
          if (state.isgood[index] == 'false') {
            if (!state.userName[index].includes($store.state.userInfo._user.name)) {
              state.userName[index].push($store.state.userInfo._user.name)
            } else {
              Toast('亲你已经赞过')
              return
            }
            state.isgood[index] = 'true'
            $store.state.goodnums[index]++
            await goods({
              goodnums: $store.state.goodnums[index],
              _id: _id
            })
            await sendGoodImg({
              allGoodImg: state.goodImg,
              userName: state.userName,
              index: index
            })
          } else {
            state.goodImg[index].splice(state.goodImg[index].indexOf($store.state.userInfo._user.userImg), 1)
            state.userName[index].splice(state.goodImg[index].indexOf($store.state.userInfo._user.name), 1)
            state.isgood[index] = 'false'
            $store.state.goodnums[index]--
            await goods({
              goodnums: $store.state.goodnums[index],
              _id: _id
            })
            await sendGoodImg({
              allGoodImg: state.goodImg,
              userName: state.userName,
            })
          }
        }, 100)()
      } else {
        Toast('登陆后即可点赞', 'fail')
      }
    }

    const showContent = (index) => {
      router.push({ path: `/content/${index}` })
    }
    const like = async (index) => {
      // console.log(!state.headerlove[index]);
      if ($store.state._id) {
        state.headerlove[index] = !state.headerlove[index]
        console.log(state.headerlove);
        await postLoveContext({
          _id: $store.state._id,
          goodArr: state.headerlove
        })
      } else {
        Toast('登陆后即可收藏', 'fail')
      }
      // console.log(state.headerlove[index], index);
    }
    onMounted(async () => {
      let list = ''
      let loveList = ''
      for (let i = 0; i < state.goodnums.length + 1; i++) {
        state.goodImg.push([])
        state.userName.push([])
        state.isgood.push('false')
        state.headerlove.push(false)
      }
      // console.log($store.state.userInfo._user.name);
      list = await getGoodImg()
      await $store.dispatch('getUser')
      console.log($store.state._id);
      if ($store.state._id === null) {
        router.push({ path: '/login' })
      }
      loveList = await getLoveContext({
        _id: $store.state._id
      })
      Array.from(loveList.data.goodArr).forEach((item, index) => {
        state.headerlove[index] = item
      })
      for (let i = 0; i < list.GoodImgArray[0].allGoodImg.length; i++) {
        state.goodImg[i] = list.GoodImgArray[0].allGoodImg[i]
        state.userName[i] = list.GoodImgArray[0].userName[i]
      }
    })
    return {
      ...toRefs(state),
      good,
      like,
      showContent
    }
  }
}
</script>

<style lang="less">
.TL {
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 40px;
  .travelList {
    border-bottom: solid yellowgreen;
    width: 100%;
    margin-bottom: 20px;
    .img {
      display: flex;
      flex-direction: row;
      height: 80px;
      img {
        display: block;
        margin-right: 5px;
        height: 80px;
        overflow: hidden;
      }
    }
    .title {
      font-size: 20px;
      color: yellowgreen;
    }
    .content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .goodcontent {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 20px;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      span {
        line-height: 20px;
      }
    }
    .function {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .hand.active {
        background: aquamarine;
      }
      .love.active {
        background: rgb(182, 36, 36);
      }
    }
    .Author {
      line-height: 25px;
      width: 100%;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
      .author {
        float: right;
      }
    }
  }
}
</style>