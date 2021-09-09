// 写一个计时器Class，有Start、Stop、Reset功能
// ，Start和Stop的时候实时打印出当前的值，要求越精准越好


class Clock {
  constructor() {
    this.hour = 0
    this.minute = 0
    this.Seconds = 0
    this.miniseconds = 0
    this.value = 0
  }
  start () {
    let m = new Date()
    this.hour = m.getHours()
    this.minute = m.getMinutes()
    this.Seconds = m.getSeconds()
    this.miniseconds = m.getMilliseconds()
    return `${this.hour}:${this.minute}:${this.Seconds}:${this.miniseconds}`
  }
  stop () {
    let m = new Date()
    let hour, minute, Seconds, miniseconds
    hour = m.getHours()
    minute = m.getMinutes()
    Seconds = m.getSeconds()
    miniseconds = m.getMilliseconds()
    hour -= this.hour
    minute -= this.minute
    Seconds -= this.Seconds
    miniseconds -= this.miniseconds
    return `${hour}:${minute}:${Seconds}:${miniseconds}`
  }
  reset () {
    this.hour = 0
    this.minute = 0
    this.Seconds = 0
    this.miniseconds = 0
  }
}

let c = new Clock()
console.log(c.start(), c.stop());