function Block(){
     this.upDivWrap=null
     this.downDivWrap=null
     this.downHeight=baseObj.randomNum(0,150)
     this.gapHeight=baseObj.randomNum(150,160)
     this.upHeight=312-this.downHeight-this.gapHeight

     //生成管道
     this.creatDiv=function(url,height,postionType,left,top){
         var newDiv=document.createElement('div')
         newDiv.style.width='62px'
         newDiv.style.height=height
         newDiv.style.position=postionType
         newDiv.style.left=left
         newDiv.style.top=top
         newDiv.style.backgroundImage=url
         return newDiv  
     }
     this.creatBlock=function(){
         var upDiv1=this.creatDiv('url(img/up_mod.png)',this.upHeight+'px')
         var upDiv2=this.creatDiv('url(img/up_pipe.png)','60px')
         var downDiv1=this.creatDiv('url(img/down_mod.png',this.downHeight+'px')
         var downDiv2=this.creatDiv('url(img/down_pipe.png','120px')
         this.upDivWrap=this.creatDiv(null,null,'absolute','450px')
         this.downDivWrap=this.creatDiv(null,null,'absolute')
         this.upDivWrap.appendChild(upDiv1)
         this.upDivWrap.appendChild(upDiv2)
         this.downDivWrap.appendChild(downDiv1)
         this.downDivWrap.appendChild(downDiv2)
         jsWrapBg.appendChild(this.upDivWrap)
         jsWrapBg.appendChild(this.downDivWrap)
     }
}