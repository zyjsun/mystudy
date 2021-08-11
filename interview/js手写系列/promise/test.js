const PENDIG = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise (fn) {
  this.state = PENDIG//构造函数
  this.value = null
  this.resolvedCallbacks = []
  this.rejectdCallbacks = []
  function resolve () {
    if (this.state == PENDIG) {
      this.state = RESOLVED
      this.value = value
      this.resolvedCallbacks.map(cb => cb(value))
    }
  }

  function reject () {
    if (this.state == PENDIG) {
      this.state = REJECTED
      this.value = value
      this.rejectdCallbacks.map(cb => cb(value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }

}

myPromise.prototype.then = function (onFulfilled, onRejected) {//接受两个参数
  const that = this
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected == 'function' ? onRejected : err => { throw err }
  if (that.state == PENDIG) {
    that.resolvedCallbacks.push(onFulfilled)//resolve 回调执行完
    that.rejectdCallbacks.push(onRejected)//reject 执行完
  } else if (that.state == RESOLVED) {
    onFulfilled(that.value) //第一个没有执行时
  } else if (that.state == REJECTED) {
    onRejected(that.value)
  }

}