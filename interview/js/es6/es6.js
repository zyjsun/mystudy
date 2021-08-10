// var let const 区别？ 什么是变量提升？ 什么是暂时性死区？
// function cat () {
//   let name = '张三';
//   function gettype () {
//     console.log(name);
//     let name = '李四';
//     console.log(name);
//   }
//   gettype();
// };
// cat();



// // 原型继承和class继承
// // 如何实现原型继承？class如何实现继承？class本质是什么？
// // class Person{}
// // Person instanceof Function // true
// // 组合继承
// // function Parent(value) {
// //   this.val = value
// // }
// // Parent.prototype.getValue = function() {
// //   console.log(this.val);
// // }
// // function Child(value) {
// //   Parent.call(this, value)
// // }
// // Child.prototype = new Parent()

// // let child = new Child(1)
// // child.getValue() // 1
// // child instanceof Parent // true

// // 寄生组合继承
// function Parent (value) {
//   this.val = value
// }
// Parent.prototype.getValue = function () {
//   console.log(this.val);
// }
// function Child (value) {
//   Parent.call(this, value)
// }
// Child.prototype = Object.create(Parent.prototype, {
//   constructor: {
//     value: Child,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })
// let child = new Child(1)

// 模块化（为什么要用模块化？有哪几种模块化的实现？各有什么特点）
// 1. 解决命名冲突
// 2. 提高复用性
// 3. 提高代码的可维护性

// let test = function() {}
// (function() {
//   let test = function() {}
// })()

// AMD 
// define(['./a', './b'], function(a, b) {
//   a.do()
//   b.do()
// })
// CMD
// define(function(require, exports, module) {
//   var a = require('./a')
//   a.do()
//   // ...
// })

// commonJS
// a.js
// module.exports = {
//   a: 1
// }
// exports.a = 1
// // b.js
// var module = require('./a.js')
// module.a // 1

// ES module
// import xxx from './a.js'
// import { xxx } from './a.js'
// export default function() {}
// export function a() {}



// Proxy(可以实现什么功能？)
// let p = new Proxy(target, handler)
let onWatch = (obj, setBind, getBind) => {
  let handler = {
    get (target, property, receiver) {
      getBind(target, property)
      return Reflect.get(target, property, receiver)
    },
    set (target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
)
// p.a = 2 // 监听到属性
// p.a // 'a' = 2



// map filter reduce

// let arr = [1, 2, 3]
// const newArr = arr.map((v, i, arr) => v + 1, this)
// console.log(arr, newArr);
// ['1', '2', '3'].map(parseInt)
// parseInt('1', 0) // 1
// parseInt('2', 1) // NaN
// parseInt('3', 2) // NaN

// filter
let array = [1, 2, 4, 6]
let newArray = array.filter((item, index, array) => item > 2)
// console.log(newArray);

// reduce
let arr = [1, 2, 3]
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//   total += arr[i]
// }
const sum = arr.reduce((pre, current, index, arr) => pre + current, 0)
console.log(sum);
