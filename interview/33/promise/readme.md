# 1.了解promise吗？
    promise是一种异步编程的解决方案，有三种状态(如回调地狱)。promise有三种状态pending,resolved（已经完成）,reject(已失败)。当promise的状态由pending转换为resolve或rejected时，会执行对应的方法。状态一经改变就无法返回。

# 2.promise的解决的痛点是什么?
    1. 回调地狱
    2. 支持都并发的请求
    3. 可读性差的代码
    4. 解决了代码的信任问题，promise只有一次决议（.then的回调只能调用一次）
  
  # 3.promise解决的痛点还有其他解决方法？
    async await  generator函数 setTimeout 回调函数
    setTimeout 只能保证里面的函数加入到任务队列里面，过段事件在执行。

    generator函数（流程管理不方便）
    async await(没有错误捕获机制)
  # 4.promise如何使用？
    创建promise实例对象，用then方法指定resolved的状态和rejected的回调函数，用catch方法指定reject状态的方法的回调函数。
  # 5.promise的问题？解决办法
    1. 一旦执行无法中途取消
    2. promise的错误无法在外部捕捉到
    3. promise的内部如何运行很难检测
  async await

  # 6.老旧的浏览器没有Promise全局对象怎么办？
  es6-promise-polyfill，加入window全局对象。

  # 7.怎末让一个函数无论promise对象成功还是失败都能被调用？
    Promise.finally(),promise无论对象的状态如何都会被执行。
  # 8.红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）

  # 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。
  then 返回的是一个promise对象，它是不能resolve的，接受一个return的值

  # 10.封装一个异步加载图片的方法？
    

