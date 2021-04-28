function a() {
    function b() {
      var bbb = 234
      console.log(aaa);
    }
    var aaa = 123
    return b
  }
  var glob = 100
  var demo = a()
  demo()

  //两个函数相互嵌套，把里面的函数保存到外面的这个函数的外部，就一定会产生闭包
  //一个函数的AO对象被回收，那么这个AO对象里面的函数也会失败