# 腾讯考题 JS 里一句代码是怎么运行的， 编译原理
  用第一性原理来推出来，
1.代码一定是逐行运行
2.分为编译阶段与执行阶段，有先后顺序
3.哪些代码是编译阶段运行的代码， 比如变量声明
4.作用域的概念 scope 对象 存放当前代码等下在执行上下文中所有变量的引用
5.在执行代码时 变量的查找，
  var myname;//编译阶段 JS的变量类型由值决定 undefined
  myname='hhk';//执行阶段

所谓的变量提升(小黄书)，是指在JS代码执行中，JavaScript引擎(V8)
把变量的声明部分和函数的声明部分提升到代码开头的行为，变理提升后，会给变量设置默认值为undefined


做作业， 打卡
'''
  showName()
  var showName=function()
  {
      console.log(2);
  }
    var showName=function()
  {
      console.log(1);
  }
  showName()

'''
 - 以执行上下文环境，编译阶段，执行阶段，为什么答案是这个？
 - 变量提升的图画出来