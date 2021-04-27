var bird={//键值对
    flyTime:null,//小鸟飞翔的定时器
    wingTimer:null,//小鸟翅膀摆动的定时器
    div:document.createElement('div'),//js中创建容器，出现在图片上 创建Dom结构
    showBird:function(parentObj) {
            this.div.style.width='40px' //this->brid
            this.div.style.height='28px'
            this.div.style.backgroundImage='url(img/bird0.png)'
            this.div.style.backgroundRepeat='no-repeat'
            parentObj.appendChild(this.div)//添加小方块
            this.div.style.position='absolute'
            this.div.style.left='50px'
            this.div.style.top='200px'

    },
    fallSpeed: 0, //小鸟下降的速度
    flyBird:function(){//控制小鸟下落
        this.flyTime=setInterval(fly,60)//被setInterval调用
            function fly(){
                bird.div.style.top=bird.div.offsetTop+bird.fallSpeed++ +'px'
            if(bird.div.offsetTop>395){//掉落到地
              bird.fallSpeed=0
              clearInterval(bird.flyTime)
              clearInterval(bird.wingTimer)
            }
            //不让小鸟飞出界
            if(bird.div.offsetTop<0){
                bird.div.style.top='0px'
                bird.fallSpeed=2
            }
            if(bird.fallSpeed>12){
                bird.fallSpeed=12
            }
            }
    },
    wingWave: function(){//控制小鸟煽动翅膀   
        var up=['url(img/up_bird0.png)','url(img/up_bird1.png)']   
        var imgArr=['url(img/down_bird0.png)','url(img/down_bird1.png)']
        var index=0;
        bird.wingTimer=setInterval(wing,120)
        var j=0
        function wing(){
            if(bird.fallSpeed>0){
            bird.div.style.backgroundImage=imgArr[index++]//或'url('+imgArrindex]+')'
            if(index==2){index=0 }
            }
            else{
                bird.div.style.backgroundImage=up[j++]
                if(j==2){j=0 }//上升时翅膀的摆动
            }
        }
        }

    }
