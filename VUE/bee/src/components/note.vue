<template>
  <div class="TL">
    <div class="travelList"
         v-for="item in travelList.allNote"
         :key="item._id">
      <div class="title">{{item.title}}</div>
      <div class="img">
        <div v-for="(img,index) in item.contentImg"
             :key="index">

          <img :src="img.content"
               alt="">
        </div>

      </div>

      <div class="content">{{item.content}}</div>
      <!-- <div class="content">{{item.contentImg[0].content}}</div> -->
      <div class="Author">
        作者:
        <img :src="item.authorImg"
             alt="">
        <span>{{item.author}}</span>
        <span class="author">{{item.meta.createAt}}</span>
      </div>
      <div class="function">
        <van-icon name="like-o"
                  size="25" />
        <van-icon name="down"
                  size="25"
                  @click="showContent" />
        <van-icon name="good-job-o"
                  size="25" />
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted } from '@vue/runtime-core'
export default {
  props: ['travelList'],
  setup () {
    // onMounted(()=>{
    //   console.log(travelList)
    // })
  }
}
</script>

<style lang="less">
.TL {
  width: 90vw;
  margin: 0 auto;
  .travelList {
    border-radius: 20px solid yellowgreen;
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
    .function {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .Author {
      line-height: 25px;
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