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
                  :class="{'active':headerlove}"
                  @click="like" />
        <van-icon name="down"
                  size="25"
                  @click="showContent" />
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
export default {
  props: {
    travelList: {
      type: Object
    }
  },
  setup () {//不能修改
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
            //  if(state.userName[index].includes($store.state.userInfo._user.name)){
            //         Toast('亲你已经赞过')
            // return
            //   }
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
    // const change = () => {
    //   state.List = props
    // }
    //收藏
    const like = () => {
      state.headerlove = !state.headerlove
    }
    onMounted(async () => {

      let list = ''
      for (let i = 0; i < state.goodnums.length + 1; i++) {
        state.goodImg.push([])
        state.userName.push([])
        state.isgood.push('false')
      }
      console.log($store.state.userInfo._user.name);
      list = await getGoodImg()
      console.log(list);
      for (let i = 0; i < list.GoodImgArray[0].allGoodImg.length; i++) {
        state.goodImg[i] = list.GoodImgArray[0].allGoodImg[i]
        state.userName[i] = list.GoodImgArray[0].userName[i]
      }

      // state.isgood.shift()
      // await change()
      // console.log(props)
      // for (let i = 0; i < props.travelList.allNote.length; i++) {
      //   state.num[i] = props.travelList.allNote[i].nums
      // }

      // console.log($store.state._id)
    })
    return {
      ...toRefs(state),
      good,
      like,
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