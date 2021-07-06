<template>
  <div class="header">
      <div class="content-wrapper">
          <div class="avatar">
              <img width="64" height="64" src="http://p0.meituan.net/200.0/dpdeal/8fa63be2b9a102a7537f88982d2a59bb120927.jpg" alt="">
          </div>
          <div class="content">
              <div class="title">
                  <span class="brand"></span>
                  <span class="name">蜗牛的粥店</span>
              </div>
              <div class="description">
                  蜂鸟专送/38分钟送达
              </div>
                  <!-- 活动 -->
           <supportIco :type="2"></supportIco>
          </div>
          <div class="support-count">5个</div>
      </div>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico'
export default {
    components:{
      "supportIco": SupportIco
    }
}
</script>

<style lang="less">
.header{
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  .content-wrapper{
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;
    .avatar{
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;
      img{
        border-radius: 2px;
      }
    }
    .content{
      flex: 1;
      .title{
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .brand{
          width: 30px;
          height: 18px;
          background-image: url('./brand@2x.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .name{
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
        }
      }
      .description{
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
      }
    }
  }
}
</style>