//数据变化了,视图必将更新
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)//浅拷贝
Array.from(['push', 'shift', 'unshift', 'pop']).forEach(method => {
  //函数劫持,重写函数
  proto[method] = function () {
    oldArrayPrototype[method].call(this, ...arguments)
    console.log('arr')
    updateView()//重写数组方法
  }
});
function updateView () {
  console.log('视图更新')
}

function observer (target) {//观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }
  if (Array.isArray(target)) {
    Object.setPrototypeOf(target, proto)
    // target.__proto__ = proto//原型指向proto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}
function defineReactive (target, key, value) {
  if (typeof value == 'object' && value !== null) {
    observer(value)//递归
  }
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newVal) {
      if (newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}
let data = {
  name: 'zyj',
  age: {
    num: 18
  },
  like: {
    a: {
      hb: 'running'
    }
  },
  job: ['coder', 'driver', 'player']
}
observer(data)//data被劫持了
// data.name = 'zz'
// data.age.like.a.hb = 'coding'
data.job.pop()