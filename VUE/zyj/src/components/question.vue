<template>
  <section>
      <header class="top_tips">
          <span class="num_tip" v-if="fatherComponent==='home'">{{level}}</span>
          <span class="num_tip" v-else>{{itemDetail[itemNum-1].topic_name}}</span>
      </header>
      <!-- 开始 -->
      <div v-if="fatherComponent==='home'">
          <div class="home_logo item_container_style"></div>
          <router-link to="item" class="start button_style"></router-link>
      </div>
      <!-- 答题 -->
      <div v-else>
          <div class="item_back item_container_style">
              <!-- v-for="(item,index) of itemDetail" :key="index" -->
              <div class="item_list_container" >
                  <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
                  <ul>
                      <li class="item_list" v-for="(answer,index2) of itemDetail[itemNum-1].topic_answer" 
                      :key="index2"  @click="select(answer.topic_answer_id)">
                          <span class="option_style" :class="{'has_choosed': hasSelect===answer.topic_answer_id}">{{chooseType(index2)}}</span>
                        <span class="option_detail">{{answer.answer_name}}</span>
                    </li>
                  </ul>
              </div>
          </div>
          <span class="next_item button_style" @click="nextQuestion" v-if="itemNum<itemDetail.length" ></span>
          <span v-else class="submit_item button_style" @click="submitAnswer" ></span>

      </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            // i:0
            hasSelect: -1
        }
    },
props: ['fatherComponent'],
computed: mapState([
        'itemNum',
        'level',//第几周
        'itemDetail',//题目详情
        'timer'//计时器
]),
methods:{
    chooseType(type){
        switch(type){
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
            case 3: return 'D';
        }
    },
    nextQuestion(){
        if(this.hasSelect===-1){
            alert('请选择一个答案')
            return
        }
        this.$store.commit('next')
        this.$store.commit('remeberId',this.hasSelect)
        this.hasSelect=-1
    },
    submitAnswer(){
        this.$store.commit('remeberId',this.hasSelect)
        this.$router.push('score')//跳转
        // this.$store.commit('remeberId')
    },
    // next(){
    //     return this.i++
    // },
    select(e){
        this.hasSelect=e
    }
}
}

</script>

<style lang="less">
.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../assets/images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}	
	.home_logo{
		background-image: url(../assets/images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../assets/images/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../assets/images/1-4.png);
    }
    .next_item{
    	background-image: url(../assets/images/2-2.png);
    }
    .submit_item{
    	background-image: url(../assets/images/3-1.png);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color:#fff;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #fff;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>