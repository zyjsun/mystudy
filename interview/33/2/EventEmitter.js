class EventEmitter {
  constructor() {
    this.events = {}
  }

  on (type, callBack) { //订阅事件的方法
    if (!this.events[type]) {
      this.events[type] = [callBack]
    } else {
      this.events[type].push(callBack)
    }
  }

  emit (type, ...rest) { //发布事件的方法
    this.events[type] &&
      this.events[type].forEach(fn => fn.apply(this, rest))
  }

}

let eve = new EventEmitter()

eve.on('aaa', (e) => {
  console.log(e);
  console.log(1111);
})

eve.emit('aaa', 333)
