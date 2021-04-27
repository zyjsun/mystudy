//编译阶段 执行阶段
//代码是顺序执行
//JS代码 在编译阶段发生了什么。。。 JS变量的声明提升到当前作用域的最顶端
//console.log(typeof showName);
 console.log(showName);//可以被打印，不能调用
//showName();//代码文件->从文件中导入内存 申请变量空间 没有这个东西
//scope 对象，所有的变量放进去 代码运行的环境 执行上下文  {   myname   }
//不给极客
console.log(myname);//执行语句 报错？ 引用错误 undefined 变量提升
var myname;//编译阶段  undefined JS的类型是由值决定的
myname='极客';//赋值语句 执行阶段
// function showName(){//函数与普通变量声明来做比较 调用
//        console.log('函数showName被执行了');
// }  
     //函数表达式 与普通变量一样
      var showName=function()
      {
         console.log('函数showName被执行了')
      }