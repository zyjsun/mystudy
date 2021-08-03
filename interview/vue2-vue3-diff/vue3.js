//2.0默认递归,改变数组的length属性是无效的,
//对象不存在的属性是不能被劫持的

function isObject (val) {
  return typeof val === 'object' && val !== null
}


function reactive (target) {
  // 创建响应式对象
  return createReactiveObject(target)
}
function createReactiveObject (target) {
  if (!isObject(target)) {//如果不是对象,直接返回
    return target
  }
  let baseHandler = {
    get (target, key, receiver) {

      console.log('获取')
      let result = Reflect.get(target, key, receiver)
      return isObject(result) ? reactive(result) : result //递归多层代理
      // return target[key]
    },
    set (target, key, value, receiver) {
      let hadKey = target.hasOwnProperty(key)
      let oldValue = target[key]
      if (!hadKey) {
        console.log('新增')
      } else if (oldValue !== value) {
        console.log('修改')
      }
    }
  }
  let observed = new Proxy(target, baseHandler)//代理target
  return observed
}

let proxy = reactive({
  name: 'huihui',
  age: {
    n: 18
  }
})

// proxy.age.n = 17
console.log(proxy.age.n)
// console.log(proxy.age)
// proxy.sex = 'girl'

// let proxy=reactive(obj)