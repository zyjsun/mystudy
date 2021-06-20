(function(window) {

    function myPromise(execotor) {
      let self = this
      self.status = 'pending'
      self.data = undefined  // 存储resolve的结果
      self.callbacks = []  // {onResolved => {}, onRejected => {}}
  
  
      function resolve(value) {
        if (self.status !== 'pending') {
          return
        }
        // 将状态改变成为resolved
        self.status = 'resolved'
        // 存值
        self.data = value
        // 如果有待执行的callback函数，立即异步执行它
        if (self.callbacks.length > 0) {
          setTimeout(() => {
            self.callbacks.forEach(callbackObj => {
              callbackObj.onResolved(value)
            })
          }, 0)
        }
      }
      function reject(value) {
        if (self.status !== 'pending') {
          return
        }
        // 将状态改变成为reject
        self.status = 'reject'
        // 存值
        self.data = value
        // 如果有待执行的callback函数，立即异步执行它
        if (self.callbacks.length > 0) {
          setTimeout(() => {
            self.callbacks.forEach(callbackObj => {
              callbackObj.onResolved(value)
            })
          }, 0)
        }
      }
      
      try {
        execotor(resolve, reject)
      } catch (error) {
        reject(error)
      }
  
    }
  
    // promise 原型挂载各种方法
    myPromise.prototype.then = function(onResolved, onRejected) {
      // onResolved  onRejected 存到数组
      // this.callbacks.push({ onResolved, onRejected })
      let self = this
      return new myPromise((resolve, reject) => {
        if (self.status === 'pending') {
          self.callbacks.push({
            onResolved() { onResolved(self.data) },
            onRejected() { onRejected(self.data) }
          })
        } else if (self.status === 'resolved') {
          setTimeout(() => {
            const result = onResolved(self.data)
            if (result instanceof myPromise) {
              result.then(
                value => { resolve(value) },
                reason => { reject(reason) }
              )
            } else {
              resolve(result)
            }
            // onResolved(self.data)
          }, 0)
        } else {
          setTimeout(() => {
            onRejected(self.data)
          }, 0)
        }
      })
    }
    myPromise.prototype.catch = function(onRejected) {
      
    }
  
    // promise 函数对象上挂载方法
    myPromise.resolve = function(value) {
  
    }
    myPromise.reject = function(value) {
      
    }
    myPromise.all = function(value) {
      
    }
    myPromise.race = function(value) {
      
    }
  
  
    global.myPromise = myPromise
  })()
  
  // pending
  // resolved
  // rejected
  
  
  let p = new myPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('yes');
      resolve('ok')
    }, 100)
  })
  p.then(
    value => {
      return new Promise((resolve, reject) => {
        resolve(2)
      })
    }, 
    reject => {}
  )
  .then(
    value => {
      console.log(value, 'onResolved');
    }, 
    reject => {}
  )