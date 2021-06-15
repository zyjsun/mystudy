function extendDrag(drag) {
  // 鼠标摁下
  let stopAnimate = function(curEle) {
    clearInterval(curEle.flyTimer)
    curEle.speedFly = undefined
    clearInterval(curEle.dropTimer)
  }
  // 鼠标移动
  let computedFly = function(curEle) {
    if (!curEle.lastFly) {
      curEle.lastFly = curEle.offsetLeft
      curEle.speedFly = 0
      return
    }
    curEle.speedFly = curEle.offsetLeft - curEle.lastFly
    curEle.lastFly = curEle.offsetLeft
  }
  // 水平运动
  let animateFly = function(curEle) {
    let minL = 0,
        maxL = document.documentElement.clientWidth - curEle.offsetWidth;
    let speed = curEle.speedFly
    speed = Math.abs(speed)
    curEle.flyTimer = setInterval(() => {
      speed *= 0.98
      Math.abs(speed) <= 0.1 ? clearInterval(curEle.flyTimer) : null
      // 当小球到达窗口最左边
      let curL = curEle.offsetLeft
      curL += speed

      if (curL >= maxL) { // 往左反弹
        curEle.style.left = maxL + 'px'
        speed *= -1
        return
      }
      if (curL <= minL) { // 往右反弹
        curEle.style.left = minL + 'px'
        speed *= -1
        return
      }
      curEle.style.left = curL + 'px'
    }, 20)
  }
  // 竖直运动
  let animateDrop = function(curEle) {
    let speed = 9.8, 
        minT = 0, 
        maxT = document.documentElement.clientHeight - curEle.offsetHeight,
        flag = 0;
    curEle.dropTimer = setInterval(() => {
      speed += 10
      speed *= 0.98
      Math.abs(speed) <= 0.1 ? clearInterval(curEle.dropTimer) : null

      let curT = curEle.offsetTop
      curT += speed
      if (curT >= maxT) { // 触底反弹
        curEle.style.top = maxT + 'px'
        speed *= -1
        return
      }
      if (curT <= minT) { // 触顶反弹
        curEle.style.top = minT + 'px'
        speed *= -1
        return
      }
      curEle.style.top = curT + 'px'
    }, 20)
  }

  drag.subDown.add(stopAnimate)
  drag.subMove.add(computedFly)
  drag.subUp.add(animateFly)
  drag.subUp.add(animateDrop)
}