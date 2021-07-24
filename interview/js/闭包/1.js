for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i++)
  }, 4000);
}
console.log(i)
//全局执行上下文 作用域链 全局变量对象 变量对象
//单线程 ， 执行栈， 放到任务队列中五个i++
//匿名函数可以访问到当前作用域链中变量的i的值，匿名函数的作用域链


for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x++)
    }, 4000);
  })(i)

}
console.log(i)
//执行栈中有全局执行上下文加立即执行函数上下文 i放入任务队列中
//立即执行函数执行完毕，从执行栈中弹出，第二次for循环 依次执行循环，最后将
//执行任务队列
