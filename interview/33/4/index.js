// const a
// let a
//如何在 es5实现let const
//let 实现
// (function (params) {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// })()
// console.log(i);

// const 实现
// function _const (key, value) {
//   Object.defineProperty(this, key, {//window上的obj
//     value,
//     writable: false,
//     enumerable: true
//   })
//   return value
// }

// let o = _const('obj', { a: 1 })
// o.b = 2

//3.既然可以const不可保证对象属性不被修改，怎么解决这个问题
// Object.freeze(obj)//严格模式下
//使他改不动

//4. 这样能保证对象被冻结吗？
//  - 不能，只能原始类型，原型也被冻住
const person = {
  age: 188,
  like: {
    first: 'reading'
  }
}
// Object.freeze(like)

const constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key])
    }
  })
}

//5. 既然你知道Object.freze,那么说说原理？
function myfreze (obj) {
  //不能遍历到原型的属性
  // Object.keys(obj).forEach((key)=>{
  //   Object.defineProperty(obj,key,{  
  //     value:obj[key],
  //     writable: false,
  //   })
  // })
  // console.log(obj);

  for (let key in obj) {
    Object.defineProperty(obj, key, {
      writable: false
    })
  }
  Object.seal(obj)//增删
}

var obj = {
  a: 1,
  b: {
    a: 2
  }
}
// myfreze(obj)
// obj.b.c = 3
// obj.a = 2
// obj.c = 3
// // obj = {}
// console.log(obj);

// 6.这个方法有问题，对象还能新增属性
const obj1 = {
  num: 12
}

// Object.seal(obj1)//房间封住了，不能增加别的元素
// obj1.num = 22
// console.log(obj1);
// 冻住不可删，加，改, seal关闭不能加，减，删

// 7. ES6之前有没有块级作用域
var a
var a = 0
if (true) {
  a = 1
  function a () { }     //会把函数的变量定义，同步到window下               // var a a=function(){} 全局最前面  移到块级作用域最前面
  a = 2               //在块级作用域中，定义函数，函数会去到window作用域下 if匹配函数才有块级作用域
  console.log('里面的a', a);
}
console.log('外面的a', a);//在块级作用域下函数名变量会同步到函数作用域中