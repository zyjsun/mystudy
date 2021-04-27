
var radius = 240
var imgWidth = 120
var imgHeight = 170
var autoRotate = true
var rotateSpeed = -60

var oDarg=document.getElementById('darg-container')
var ospin = document.getElementById('spin-container')
var ground = document.getElementById('ground')
var aImg = ospin.getElementsByTagName('img')
var aVid = ospin.getElementsByTagName('video')
var aEle = [...aImg, ...aVid]

ospin.style.width = imgWidth + 'px'
ospin.style.height = imgHeight + 'px'

ground.style.width = radius * 3 + 'px'
ground.style.height = radius * 3 + 'px'

function init(delayTime) {
  // 给所有的图片加动画
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)"
    aEle[i].style.transition = "transform 1s"
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's'
  }
}

setTimeout(init, 1000)

// 让所有的图片转起来
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert')
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`
}

// 滚轮滚动
document.onmousewheel = function(e) {
  console.log(e);
  e = e || window.event
  var d = e.wheelDelta / 20 || -e.detail
  radius += d
  init(1)
}





// 鼠标拖动页面




// 滚轮滚动
document.onmousewheel = function(e) {
  // console.log(e);
  e = e || window.event
  var d = e.wheelDelta / 20 || -e.detail
  radius += d
  init(1)
}


var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 0;


// 鼠标拖动页面
document.onpointerdown = function(e) {
  // console.log(e);
  e = e || window.event
  var sX = e.clientX,
      sY = e.clientY
  
  this.onpointermove = function(e) {
    console.log(e);
    e = e || window.event
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1
    tY += desY * 0.1
    // 让页面跟着鼠标动起来
    applyTransform(oDarg)
  }
  return false
}

this.onpointerup=function(e){
  oDarg.timer=setInterval(function(){
    desX*=0.95
    desY*=0.95
    tX+=desX*0.1
    tY+=desY*0.1
    applyTransform(oDarg)
    playSpin(false)
    if(Math.abs(desx<0.5&&Math.abs(desY)<0.5))
    {
      clearInterval(oDarg)
      playSpin(true)
    }
  }, 17)
  this.onpointermove=this.onpointerup=null
 
}
function applyTransform(obj) {
  if (tY > 180) tY = 180
  if (tY < 0) tY = 0

  obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`
}

function playSpin(yes){
  ospin.style.animationPlayState=(yes?'running':'pasued')
}