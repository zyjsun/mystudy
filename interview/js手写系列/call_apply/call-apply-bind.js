Function.prototype.myCall1 = function (context) {
  // 如果没有传或传的值为空对象 context指向window
  context = context || window
  let fn = mySymbol(context)
  context[fn] = this //给context添加一个方法 指向this
  // 处理参数 去除第一个参数this 其它传入fn函数
  let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
  context[fn](...arg) //执行fn
  delete context[fn] //删除方法
}
Function.prototype.myCall = function (context, ...args) {
  const ctx = context || window;
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
};

function mySymbol (obj) {
  // 不要问我为什么这么写，我也不知道就感觉这样nb
  let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
  // 牛逼也要严谨
  if (obj.hasOwnProperty(unique)) {
    return mySymbol(obj) //递归调用
  } else {
    return unique
  }
}

Function.prototype.myApply = function (context) {
  // 如果没有传或传的值为空对象 context指向window
  if (typeof context === "undefined" || context === null) {
    context = window
  }
  let fn = mySymbol(context)
  context[fn] = this //给context添加一个方法 指向this
  // 处理参数 去除第一个参数this 其它传入fn函数
  let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
  context[fn](arg) //执行fn
  delete context[fn] //删除方法

}
Function.prototype.myBind = function (context) {
  // 不是函数抛出异常
  if (typeof this !== 'function') {
    throw new Error('类型错误')
  }
  let _this = this
  // 保留上个函数的传值
  let args = Array.prototype.slice.call(arguments, 1)
  return function () {
    // args.concat(arguments) 这两个顺序不能变 arguments为类数组没有concat方法
    _this.apply(context, args.concat(arguments))
  }
}



