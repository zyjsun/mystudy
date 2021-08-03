<template>
  <div class="TL">
    <div class="travelList"
         v-for="item in travelList"
         :key="item.title">
      <div class="title">{{item.title}}</div>
      <div class="img">
        <div v-for="(pic,index) of item.imgArr"
             :key="index">
          <img :src="pic"
               alt="">
        </div>
      </div>
      <div class="content">{{item.info}}</div>
      <div class="Author">
        作者:
        <img :src="item.Author.authorImg"
             alt="">
        <span>{{item.Author.author}}</span>
        <span class="author">{{item.Author.nums}}</span>
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
export default {
  props: ['travelList']
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