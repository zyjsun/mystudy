<template>
  <transition name="fade">

      <div class="header-detail">
        <div class="detail-wrapper">
            <div class="detail-main">
                <h1 class="name">{{seller.name}}</h1>
                <div class="start-wrapper" v-if="seller.score" >
                    <!-- 星星 -->
                    <Star :seller="seller"></Star>
                </div>

                <div class="title">
                    <div class="line"></div>
                    <div class="text">优惠信息</div>
                    <div class="line"></div>
                </div>
                <!-- 活动 -->
                 <ul class="supports"  v-if="seller.supports">
                    <li class="supports-item" v-for="(item,index) in seller.supports" :key="index"> 
                        <supportIco :size="2" :type="item.type"></supportIco>
                    <span class="text">{{item.description}}</span>
                    </li>
                </ul>
                 <div class="title">
                    <div class="line"></div>
                    <div class="text">商家公告</div>
                    <div class="line"></div>
                </div>
                <div class="bulletin">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
            </div>
             
        </div>
        <div class="detail-close"  @click.stop="showDetail">
            <!-- @click.stop 阻止事件冒泡 -->
            <i class="icon-close"></i>
        </div>
        </div>

  </transition>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico'
import Star from '@/components/start-ico/start'
export default {
    components:{
      SupportIco,
      Star
    },
props:{
      seller: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
        showDetail(){
            //控制页面消失，要传数据给父组件
            this.$emit('hide',false)
            //两个参数 事件名 事件参数
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
                .supports{
                    width: 80%;
                    margin: 0 auto;
                    .supports-item{
                        display: flex;
                        align-items: center;
                        padding: 0 12px;
                        margin-bottom: 12px;
                        .text{
                            line-height: 16px;
                            font-size: 10px;


                        }
                    }
                    .supports-item:last-child{
                        margin-bottom: 0;
                    }
                }
                .bulletin{
                    width: 80%;
                    margin: 0 auto;
                    .content{
                        padding: 0 12px;
                        line-height: 24px;
                        font-size: 14px;
                    }
                }
            }

        }
        .detail-close{
            position: relative;
            width: 30px;
            height: 30px;
            margin: -64px auto 0 auto;
            font-size: 30px;
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