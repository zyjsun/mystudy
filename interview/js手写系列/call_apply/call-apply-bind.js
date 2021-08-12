// Function.prototype.myCall1 = function (context) {
//   // 如果没有传或传的值为空对象 context指向window
//   context = context || window
//   let fn = Symbol(context)
//   context[fn] = this //给context添加一个方法 指向this
//   // 处理参数 去除第一个参数this 其它传入fn函数
//   let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
//   context[fn](...arg) //执行fn
//   delete context[fn] //删除方法
// }
// Function.prototype.myCall = function (context, ...args) {
//   const ctx = context || window;
//   const fn = Symbol();
//   ctx[fn] = this;
//   const res = ctx[fn](...args);
//   delete ctx[fn];
//   return res;
// };

// function mySymbol (obj) {
//   // 不要问我为什么这么写，我也不知道就感觉这样nb
//   let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
//   // 牛逼也要严谨
//   if (obj.hasOwnProperty(unique)) {
//     return mySymbol(obj) //递归调用
//   } else {
//     return unique
//   }
// }

// Function.prototype.myApply = function (context) {
//   // 如果没有传或传的值为空对象 context指向window
//   if (typeof this !== 'function') { throw typeof Error }
//   if (typeof context === "undefined" || context === null) {
//     context = window
//   }
//   let fn = Symbol(context)
//   context[fn] = this //给context添加一个方法 指向this
//   // 处理参数 去除第一个参数this 其它传入fn函数
//   let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
//   context[fn](arg) //执行fn
//   delete context[fn] //删除方法

// }
// Function.prototype.myBind = function (context) {
//   // 不是函数抛出异常
//   if (typeof this !== 'function') {
//     throw new Error('类型错误')
//   }
//   let _this = this
//   // 保留上个函数的传值
//   let args = Array.prototype.slice.call(arguments, 1)
//   return function () {
//     // args.concat(arguments) 这两个顺序不能变 arguments为类数组没有concat方法
//     _this.apply(context, args.concat(arguments))
//   }
// }



Function.prototype.myApply = function (context) {
  context = context || window
  if (typeof this !== 'function') {
    throw new Error('类型错误')
  }
  const fn = Symbol(context)
  context[fn] = this//this为这个函数
  let result
  if (arguments[1]) {
    result = context[fn](...arguments[1])
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result
}

// Function.prototype.myBind = function (context) {
//   if (typeof this !== 'function') {
//     throw new Error('类型错误')
//   }
//   context = context || window
//   //返回函数
//   let _this = this
//   const args = [...arguments].slice(1)
//   return function F () {
//     //把this调用
//     //如果F被new
//     //this instanceof F
//     if (this.__proto__ == F.prototype) {
//       return new _this(...args, ...arguments)
//     }
//     return _this.apply(context, args.concat(...arguments))
//   }
// }

//重点
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  context = context || window
  const _this = this
  const args = [...arguments].slice(1)
  let fn = function () { }
  // 返回函数
  let F = function () {
    // 如果F被new
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    // 把this调用掉
    return _this.apply(context, args.concat(...arguments))
  }
  fn.prototype = _this.prototype//调用mycall的函数的this
  F.prototype = new fn()//mybind 返回的函数的显式原型加上调用mycall的函数的this的显示原型，不然new出来的实例识别不了调用mycall的函数的原型

  // F.prototype = _this.prototype
  return F
}

let obj = {
  name: 'zz'
  // fn:function person(){

  // }
}
//obj.person()
function person (x, y, z) {
  console.log(this.name)
  console.log(x, y, z);
}

// person.myApply(obj)
// let test = person.myBind(obj, 1, 2, 3)
// new test() person{}


function Animal (name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');//f()
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}
