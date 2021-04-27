window.onload=function(){
    imgLocation('container','box')
}
//当前有多少图片要摆放
function imgLocation(parent,content){
      //将parent下的所有内容取出
      var cparent=document.getElementById(parent)//parent->container 父容器  获取盒子container标签
      var ccontent=getChildElement(cparent,content)//函数 获取图片box
      var imgWidth=ccontent[0].offsetWidth
      var num=Math.floor(document.documentElement.clientWidth/imgWidth )//clientHeight浏览器宽度  
      cparent.style.cssText=`width:${imgWidth*num}px`//container 一行能装图片的宽度

      var BoxHeightArr=[] //图片的宽度
      for(var i=0;i<ccontent.length;i++){
           if(i<num){
               BoxHeightArr[i]=ccontent[i].offsetHeight  //第一行展示的图片
            //    console.log(BoxHeightArr);
           }else{
               var minHeight=Math.min.apply(null,BoxHeightArr)//数组最小值  null为作用域
            //    console.log(minHeight)
               var minIndex=getMinHeightLocation(BoxHeightArr,minHeight)
                 ccontent[i].style.position='absolute'//定位
                 ccontent[i].style.top=minHeight+'px'      //定哪
                 ccontent[i].style.left=ccontent[minIndex].offsetLeft+'px'
                 BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight//跟新每一列行高
           }
      }
}
function getMinHeightLocation(BoxHeightArr,minHeight){
       for(var i in BoxHeightArr){
           if(BoxHeightArr[i]===minHeight)
           {
           return i
           }
       }
}
function getChildElement(parent,content){

    const contentArr=[];
    const allContent=parent.getElementsByTagName('*')//标签名 子容器全取出来
     for(var i=0;i<allContent.length;i++){
         if(allContent[i].className==content)//获取类名
         {
             contentArr.push(allContent[i])
         }
     }
    // console.log(allContent)
    return contentArr
}