//标识当前的Dep id
let uidep = 0
class Dep {
  constructor() {
    this.id = uidep++
    // 存放所有的监听watcher
    this.subs = []
  }

  //添加一个观察者对象
  addSub (Watcher) {
    this.subs.push(Watcher)
  }
  //依赖收集
  depend () {
    //Dep.target 作用只有需要的才会收集依赖
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // 调用依赖收集的Watcher更新
  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

Dep.target = null
const targetStack = []

// 为Dep.target 赋值
function pushTarget (Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = Watcher
}
function popTarget () {
  Dep.target = targetStack.pop()
}

// ----------------watcher---------------
let uid = 0
class Watcher {
  constructor(vm, expOrFn, cb, options) {
    // 传进来的对象是 vue
    this.vm = vm
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user
      this.lazy = !!options.lazy
    } else {
      this.deep = this.user = this.lazy = false
    }
    this.dirty = this.lazy
    //在Vue中cb是更新视图的核心，调用diff并更新视图的过程
    this.cb = cb
    this.id = ++uid
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    if (typeof expOrFn === 'function') {
      //data依赖收集走此处
      this.getter = expOrFn
    } else {
      //watch依赖走此处
      this.getter = this.parsePath(expOrFn)
    }
    //设置Dep.target的值，依赖收集时的watcher对象
    this.value = this.lazy ? undefined : this.get()
  }
  get () {
    //设置Dep.target值，用以依赖收集
    pushTarget(this)
    const vm = this.vm
    //此处会进行依赖收集 会调用data数据的 get
    let value = this.getter.call(vm, vm)
    popTarget()
    return value
  }
  //添加依赖
  addDep (dep) {
    //去重
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        //收集watcher 每次data数据 set
        //时会遍历收集的watcher依赖进行相应视图更新或执行watch监听函数等操作
        dep.addSub(this)
      }
    }
  }
  //更新
  update () {
    if (this.lazy) {
      this.dirty = true
    } else {
      this.run()
    }
  }
  //更新视图
  run () {
    console.log(`这里会去执行Vue的diff相关方法，进而更新数据`)
    const value = this.get()
    const oldValue = this.value
    this.value = value
    if (this.user) {
      //watch 监听走此处
      this.cb.call(this.vm, value, oldValue)
    } else {
      //data 监听走此处
      //这里只做简单的console.log 处理，在Vue中会调用diff过程从而更新视图
      this.cb.call(this.vm, value, oldValue)
    }
  }
  //如果计算熟悉依赖的data值发生变化时会调用
  //案例中 当data.name值发生变化时会执行此方法
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }
  //收集依赖
  depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }

  // 此方法获得每个watch中key在data中对应的value值
  //使用split('.')是为了得到 像'a.b.c' 这样的监听值
  parsePath (path) {
    const bailRE = /[^w.$]/
    if (bailRE.test(path)) return
    const segments = path.split('.')
    return function (obj) {
      for (let i = 0; i < segments.length; i++) {
        if (!obj) return
        //此处为了兼容我的代码做了一点修改	 
        //此处使用新获得的值覆盖传入的值 因此能够处理 'a.b.c'这样的监听方式
        if (i == 0) {
          obj = obj.data[segments[i]]
        } else {
          obj = obj[segments[i]]
        }
      }
      return obj
    }
  }


}


// ----------------Observer---------------
class Observer {
  constructor(value) {
    this.value = value
    // 增加dep属性（处理数组时可以直接调用）
    this.dep = new Dep()
    //将Observer实例绑定到data的__ob__属性上面去，后期如果oberve时直接使用，不需要从新Observer,
    //处理数组是也可直接获取Observer对象
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      //这里只测试对象
    } else {
      //处理对象
      this.walk(value)
    }
  }
}
//数据重复Observer
function observe (value) {
  if (typeof (value) != 'object') return;
  let ob = new Observer(value)
  return ob;
}
// 把对象属性改为getter/setter，并收集依赖
function defineReactive (obj, key, val) {
  const dep = new Dep()
  //处理children
  let childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      console.log(`调用get获取值，值为${val}`)
      const value = val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      console.log(`调用了set，值为${newVal}`)
      const value = val
      val = newVal
      //对新值进行observe
      childOb = observe(newVal)
      //通知dep调用,循环调用手机的Watcher依赖，进行视图的更新
      dep.notify()
    }
  })
}

//辅助方法
function def (obj, key, val) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: true,
    writable: true,
    configurable: true
  })
}

//--------------computed---------
class initComputed {
  constructor(vm, computed) {
    //新建一个存储对象watcher,挂载到vm对象上
    const watchers = vm._computedWathers = Object.create(null)
    //遍历computed
    for (const key in computed) {
      const userDef = computed[key]
      //getter值为computed中key的监听函数或对象的get值
      let getter = typeof userDef === 'function' ? userDef : userDef.get
      // 新建computed的watcher
      watchers[key] = new Watcher(vm, getter)

    }
  }
}



function Vue () {

}
let data = {
  name: 'hello'
}

let computed = {
  getfullname: function () {
    console.log('执行了computed');
    console.log('新的值为：' + data.name + '-world');
    return data.name + '-world'
  }
}

let vue = new Vue()
vue.data = data
let updateComponent = (vm) => {
  data.name
}
new Watcher(vue, updateComponent, () => { })
observe(data)
new initComputed(vue, computed)
vue.getfullname
vue.getfullname
