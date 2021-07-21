class EventEmitter {
  constructor() {
    //存放订阅的名字与事件
    this.events = {};
  }
  on (eventName, callback) {
    if (!this.events[eventName]) {
      //一个名字可以订阅多个事件函数，所以是数组
      this.events[eventName] = [callback]
    } else {
      this.events[eventName].push(callback)
    }
    //链式返回this
    return this
  }

  //触发事件的方法
  emit (eventName, ...rest) {
    //遍历并执行所有订阅的事件
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback.apply(this, rest));
    }
    return this
  }
  //移除订阅事件
  off (eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb != callback)
    }
    return this
  }
  //只执行一次订阅的事件，然后移除
  once (eventName, callback) {
    let fn = (...rest) => {
      // 执行一次
      callback.apply(this, rest);
      // 执行一次后即取消订阅
      this.off(eventName, fn);
    }
    // 订阅执行时会触发 fn
    this.on(eventName, fn)
    return this
  }
}

let em = new EventEmitter();

function user1Callback (cbName) {
  console.log('用户1订阅了:', cbName);
}
function user2Callback (cbName) {
  console.log('用户2订阅了:', cbName);
}

em.on('magazineEvent1', user1Callback).on('magazineEvent1', user2Callback)
em.emit('magazineEvent1', '发布-订阅模式');


em.off('magazineEvent1', user1Callback).emit('magazineEvent1', '发布-1');


em.once('magazineEvent2', user1Callback).emit('magazineEvent2', '第二本第一次')
em.emit('magazineEvent2', '第二本第二次')


