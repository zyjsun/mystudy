//拿到要操作的dom
//取到鼠标在该dom上滑动的距离
//改变DOm的高度
//改变视频的播放速度

var speed=document.querySelector('.speed')//获取类名
var bar=document.querySelector('.speed-bar')//获取类名
var video=document.querySelector('.flex')//获取类名

speed.addEventListener('mousemove',function(e){
          var y=e.pageY-speed.offsetTop  //鼠标在白色区域的位置  offsetTop是获取某个dom机构到浏览器顶部的距离
          var percent=y/speed.offsetHeight//offsetHeight是获取某个dom机构自身的高度
          var min=0.4
          var max=4
          var playbackRate=percent*(max-min)+min
          var height=Math.round(percent*100)+'%'

          bar.style.height=height//鼠标滑动的高度
          bar.textContent=playbackRate.toFixed(2)+'x'//保留两位小数
          video.playbackRate=playbackRate //视频播放的倍速
})