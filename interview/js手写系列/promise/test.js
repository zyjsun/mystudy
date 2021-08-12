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









// Function.prototype.myApply = function (context) {
//   context = context || window
//   if (typeof this !== 'function') {
//     throw typeof Error
//   }
//   const fn = Symbol(context)
//   context[fn] = this
//   let result
//   if (arguments[1]) {
//     result = context[fn](...arguments[1])
//   } else {
//     result = context[fn]()
//   }
//   delete context[fn]
//   return result
// }

// Function.prototype.mycall = function (context) {
//   context = context || window
//   if (typeof this !== 'function') {
//     throw typeof Error
//   }
//   const fn = Symbol(context)
//   context[fn] = this
//   let arg = [...arguments].slice(1)
//   let result
//   if (arg) {
//     result = context[fn](...arg)
//   } else {
//     result = context[fn]()
//   }
//   delete context[fn]
//   return result
// }


// Function.prototype.myBind = function (context) {
//   if (typeof this !== 'function') {
//     throw new TypeError('error')
//   }
//   context = context || window
//   const _this = this
//   let args = [...arguments].slice(1)
//   let fn = function () { }
//   let F = function () {
//     if (this instanceof F) {
//       return new _this(...args, ...arguments)
//     }
//     return _this.apply(context, args.concat(...arguments))
//   }
//   fn.prototype = _this.prototype
//   F.prototype = fn.prototype
//   return F
// }

// let obj = {
//   name: 'zz'
//   // fn:function person(){

//   // }
// }
// //obj.person()
// function person (x, y, z) {
//   console.log(this.name)
//   console.log(x, y, z);
// }
// // let a = person.mybind(obj)
// // a(1, 2, 4)
// // person.myApply(obj, [1, 2, 3])

