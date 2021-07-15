<template>
  <div class="player"
       v-if="getPlaySong!==null">
    <transition>
      <div class="normal-player">
        <div class="background">
          <img width="100%"
               height="100%"
               src="https://img1.baidu.com/it/u=4117690312,4019010286&fm=26&fmt=auto&gp=0.jpg"
               alt="">
        </div>
        <div class="top">
          <div class="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title">{{ getPlaySong.name}}</h1>
          <div class="subtitle">{{ getPlaySong.artists[0].name}}</div>
        </div>
      </div>
    </transition>
    <!-- audio -->
    <audio :src="musicUrl"
           ref="audio"
           autoplay></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'
import api from '../common/api/index'
export default {
  data () {
    return {
      // playSong: null
      musicUrl: ''
    }
  },
  computed: {
    ...mapGetters(['getPlaySong'])
  },
  // computed: {
  //   playSong () {
  //     console.log(this.$store.state.music.playSong)
  //     return this.$store.state.music.playSong
  //   }
  // },
  watch: {
    getPlaySong (newVal) {
      console.log(newVal)
      api.MusicUrl(newVal.id).then(res => {
        console.log(res)
        this.musicUrl = res.data.data[0].url
        // this.$refs.audio.play()
      })
    }
  }
}
</script>

<style lang="less">
@import "../assets/css/function.less";
.player {
  z-index: 150;
  .normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: rgb(8, 5, 58);
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(5px);
    }
    .top {
      position: relative;
      margin-bottom: 25px;
      .back {
        position: absolute;
        top: 0;
        .px2rem(left, 12);
        z-index: 50;
        .icon {
          display: block;
          .px2rem(height, 100);
          .px2rem(line-height, 100);
          .px2rem(padding-left, 30);
          .px2rem(padding-right, 30);
          font-size: 22px;
        }
      }
      .title {
        width: 70%;
        margin: 0 auto;
        .px2rem(line-height, 100);
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
        color: #fff;
      }
      .subtitle {
        .px2rem(line-height, 40);
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }

    &.normal-enter-active,
    &.normal-leave-active {
      transition: all 0.4s;
      .top,
      .bottom {
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
      }
    }
    &.normal-enter,
    &.normal-leave-to {
      opacity: 0;
      .top {
        transform: translate3d(0, -100px, 0);
      }
      .bottom {
        transform: translate3d(0, 100px, 0);
      }
    }
  }
}
</style>