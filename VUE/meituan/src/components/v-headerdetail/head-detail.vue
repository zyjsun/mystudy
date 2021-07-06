<template>
  <transition name="fade">

      <div class="header-detail">
        <div class="detail-wrapper">
            <div class="detail-main">
                <h1 class="name">蜗牛的店</h1>
                <div class="start-wrapper">
                    <!-- 星星 -->
                </div>

                <div class="title">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
               
            </div>
             <ul class="supports"  v-if="seller.supports">
                    <li class="supports-item" v-for="(item,index) in seller.supports" :key="index"> 
                        <supportIco :type="item.type"></supportIco>{{item.description}}</li>
            </ul>
        </div>
        </div>

  </transition>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico'
export default {
    components:{
      SupportIco
    },
props:{
      seller: {
        type: Object,
        default(){
          return {}
        }
      }
    }
}

</script>

<style lang="less">
    .header-detail{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        overflow: hidden;
        background: rgba(7,17,27,0.8);
        color: #fff;
        opacity: 1;
        backdrop-filter: blur(10px);
        .detail-wrapper{
            display: inline-block;
            width: 100%;
            min-height: 100%;
            .detail-main{
                margin-top: 64px;
                text-align: center;
                .name{
                    line-height: 16px;
                    text-align: center;
                    font-weight: normal;
                    font-size: 16px;
                }
                .start-wrapper{
                    margin-top: 8px;
                    padding: 2px 0;
                    text-align: center;
                }
                .title{
                    display: flex;
                    width: 80%;
                    margin: 28px auto 24px auto;
                    .line{
                        flex:1;
                        border-bottom: 1px solid rgba(255,255,255,0.2);
                        position: relative;
                        top: -11px;
                    }
                    .text{
                        padding: 0 12px;
                        font-weight: 700;
                        font-size: 14px;
                    }
                }
            }

        }
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
        background: rgba(7,17,27,1);
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 0.5s;
    }
</style>