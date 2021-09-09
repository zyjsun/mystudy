class EmmitEvent {
  constructor() {
    this.event = {}
  }
  on (eventName, callBack) {//订阅中心，没有发布也执行不了
    if (!this.event[eventName]) {
      this.event[eventName] = [callBack]
    } else {
      this.event[eventName].push(callBack)
    }
  }
  emmit (eventName, ...res) {
    this.event[eventName] &&
      this.event[eventName].forEach(e => e.apply(this, res));
  }
  once (eventName, callback) {
    let fn = (...res) => {
      callback.apply(this, res)
      this.off(eventName, fn)
    }
    this.on(eventName, fn)
  }
  off (eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName] = this.event[eventName].filter(cb => cb != callback)
    }
  }
}

let e = new EmmitEvent()
e.on('abc', (e) => {
  console.log(11111, e);
})

e.emmit('abc', 'zzzz')
