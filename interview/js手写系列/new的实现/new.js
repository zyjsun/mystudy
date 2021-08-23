//new 实现
//1.创建对象
//2.设置对象原型
//3.绑定this并执行构造函数
//4.返回对象

// 1.首先用Object.creat()创建一个空对象obj;
// 2.去除第一个参数,也就是我们传入的构造函数,理由shift方法修改原数组,
// 所以 arguments 会被去除第一个参数;
// 3.将obj的_proto_指向构造函数的prototype,这样obj就能访问到构造函数原型上
// 的属性方法;
// 4.将构造函数的this用call或apply方法指向obj,让obj拥有函数内部属性方法;
// 5.返回obj;




function myNew (arg) {
  let obj = Object.create({})
  // let agu=Array.prototype.slice.call(arguments,1)
  // obj.__proto__=arg.prototype
  let fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

function Fn (name) {
  this.name = name
  // return {}
}

myNew(Fn, 'zz')//{name: zz}