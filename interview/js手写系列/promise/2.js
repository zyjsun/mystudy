class myPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.resolvedArr = []
    this.rejectedArr = []
    let resolveFn = result => {
      if (this.status !== 'pending') return
      let timer = setTimeout(() => {
        this.status = 'fulfilled'
        this.value = result
        this.resolvedArr.forEach(item => item(this.value))//把上次执行结果的返回值返回
      }, 0)
    }
    let rejectFn = reason => {
      if (this.status1 == 'pending') return
      let timer = setTimeout(() => {
        this.status = 'rejected'
        this.value = reason
        this.rejectedArr.forEach(reason => reason(this.value))
      }, 0)
    }
    try {
      executor(resolveFn, rejectFn)
    } catch (err) {
      rejectFn(err)
    }
  }
  then (fulfilledCallBack, rejectedCallBack) {
    typeof fulfilledCallBack !== 'function' ?
      fulfilledCallBack = result => result : null
    typeof rejectedCallBack !== 'function' ? rejectedCallBack
      = reason => { throw new Error(reason instanceof Error ? reason.message : reason) } : null
    return new myPromise((resolve, reject) => {
      this.resolvedArr.push(() => {
        try {
          let x = fulfilledCallBack(this.value)
          x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
        } catch (err) {
          reject(err)
        }
      })
      this.rejectedArr.push(() => {
        try {
          let x = rejectedCallBack(this.value)
          x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
        } catch (err) {
          reject(err)
        }
      })
    })
  }
  static all (promiseAry = []) {
    let index = 0
    result = 0
    return new myPromise((resolve, reject) => {
      for (let i = 0; i < promiseAry.length; i++) {
        promiseAry[i].then(val => {
          index++
          result[i] = val
          if (index === promiseAry.length) {
            resolve(result)
          }
        }, reject)
      }
    })
  }
  static race (promises) {
    return new myPromise((resolve, reject) => {
      if (promises.length === 0) {
        return
      } else {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(val => {
            resolve(result);
            return
          }, reject)
        }
      }
    })
  }
  static resolve (value) {
    if (value instanceof myPromise) return value
    return new myPromise(resolve => resolve(value))
  }
  static reject (value) {
    return new myPromise((resolve, reject) => reject(value))
  }

}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() < 0.5 ? resolve(100) : reject(-100);
  }, 1000)
})

let p2 = p1.then(result => {
  //执行then返回的是一个新的Promise
  return result + 100;
})
console.log(p2 instanceof myPromise);
let p3 = p2.then(result => {
  console.log(result);
}, reason => {
  console.log(reason)
})
