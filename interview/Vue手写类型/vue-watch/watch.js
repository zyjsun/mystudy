// class Watcher {
//   constructor(opts) {
//     this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
//     this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.data : {}
//     for (let key in opts.data) {//拿到data对象里面的每一个key Object.keys(opts.data).foreach 返回的为一个数组
//       this.setData(key)
//     }
//   }
//   getBaseType (target) {
//     const typestr = Object.prototype.toString.call(target)//"[Object String]"
//     return typestr.slice(8, -1)
//   }
//   setData (_key) {
//     //this.$data=this
//     Object.defineProperty(this, _key, {//作为劫持的对象
//       get: function () {
//         return this.$data[_key]//取data中的值
//       },
//       set: function (val) {
//         const oldVal = this.$data[_key]
//         if (oldVal === val) {
//           return val
//         } else {
//           this.$data[_key] = val//设置data中的值
//           this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
//             this.$watch[_key].call(this, val, oldval)
//           )
//         }
//       }
//     })//  Object.defineProperty(this)会把上下文指向当前的对象

//   }
// }



// let vm = new Watcher({
//   data: {
//     a: 0,
//     b: 'hello'
//   },
//   watch: {
//     a (newValue, oldValue) {
//       console.log(newValue, oldValue)
//     }
//   }
// })

// setTimeout(() => {
//   vm.a = 1
// }, 2000);

class Watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for (let key in opts.data) { // 拿到data对象里面的每一个key  Object.keys(opts.data).forEach()
      this.setData(key)
    }
  }

  getBaseType (target) {
    const typeStr = Object.prototype.toString.call(target) // "[Object string]"
    return typeStr.slice(8, -1)
  }

  setData (_key) {
    // this.$data = this
    Object.defineProperty(this, _key, { // Object.defineProperty(this)会把上下文指向当前的对象
      get: function () {
        return this.$data[_key]
      },
      set: function (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, val, oldVal)
        )
      }
    })
  }
}

let vm = new Watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a (newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  }
})

setTimeout(() => {
  vm.a = 1
}, 2000)