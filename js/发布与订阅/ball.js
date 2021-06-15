if (typeof Subscribe === 'undefined') {
  throw new Error('没有引入Subscribe')
}

class Drag {
  constructor (ele) {
    // 初始化参数
    this.ele = ele
    Array.from(['strX', 'strY', 'strL', 'strT', 'curL', 'curT']).forEach(item => {
      this[item] = null
    });

    // +++++
    this.subDown = new Subscribe()
    this.subMove = new Subscribe()
    this.subUp = new Subscribe()
    // +++++

    this.DOWN = this.down.bind(this)
    this.ele.addEventListener('mousedown', this.DOWN)
  }
  down(ev) {
    let ele = this.ele
    this.strX = ev.clientX // 鼠标点击处到浏览器窗口最左边的距离
    this.strY = ev.clientY
    this.strL = ele.offsetLeft // 元素到浏览器窗口最左边的距离
    this.strT = ele.offsetTop

    this.MOVE = this.move.bind(this)
    this.UP = this.up.bind(this)
    document.addEventListener('mousemove', this.MOVE)
    document.addEventListener('mouseup', this.UP)

    // // 清除上一次的定时器
    // clearInterval(this.flyTimer)
    // this.speedFly = undefined
    // clearInterval(this.dropTimer)

    // ++++++
    this.subDown.fire(ele, ev)
  }
  move(ev) {
    let ele = this.ele
    this.curL = ev.clientX - this.strX + this.strL
    this.curT = ev.clientY - this.strY + this.strT
    ele.style.left = this.curL + 'px'
    ele.style.top = this.curT + 'px'

    // 记录松手瞬间小球的速度
    // if (!this.lastFly) {
    //   this.lastFly = ele.offsetLeft
    //   this.speedFly = 0
    //   return
    // }
    // this.speedFly = ele.offsetLeft - this.lastFly
    // this.lastFly = ele.offsetLeft

    // ++++
    this.subMove.fire(ele, ev)
  }
  up(ev) {
    // 解绑
    document.removeEventListener('mousemove', this.MOVE)
    document.removeEventListener('mouseup', this.UP)

    // 水平垂直运动
    // this.horizen.call(this)
    // this.vertical.call(this)

    // ++++
    this.subUp.fire(this.ele, ev)
  }
  // 水平运动
  horizen() {
    let minL = 0,
        maxL = document.documentElement.clientWidth - this.ele.offsetWidth;
    let speed = this.speedFly
    speed = Math.abs(speed)
    this.flyTimer = setInterval(() => {
      speed *= 0.98
      Math.abs(speed) <= 0.1 ? clearInterval(this.flyTimer) : null
      // 当小球到达窗口最左边
      let curL = this.ele.offsetLeft
      curL += speed

      if (curL >= maxL) { // 往左反弹
        this.ele.style.left = maxL + 'px'
        speed *= -1
        return
      }
      if (curL <= minL) { // 往右反弹
        this.ele.style.left = minL + 'px'
        speed *= -1
        return
      }
      this.ele.style.left = curL + 'px'
    }, 20)
  }
  // 垂直运动
  vertical() {
    let speed = 9.8, 
        minT = 0, 
        maxT = document.documentElement.clientHeight - this.ele.offsetHeight,
        flag = 0;
    this.dropTimer = setInterval(() => {
      speed += 10
      speed *= 0.98
      Math.abs(speed) <= 0.1 ? clearInterval(this.dropTimer) : null

      let curT = this.ele.offsetTop
      curT += speed
      if (curT >= maxT) { // 触底反弹
        this.ele.style.top = maxT + 'px'
        speed *= -1
        return
      }
      if (curT <= minT) { // 触顶反弹
        this.ele.style.top = minT + 'px'
        speed *= -1
        return
      }
      this.ele.style.top = curT + 'px'
    }, 20)
  }
}