(function () {
    var a = (b = 5);//隐式引用全局作用域 window.b=5 a仅存在函数内部局部变量
  })();
  console.log(b);
  console.log(a);
//   5 Error, a is not defined

// 解析
// 在这个立即执行函数表达式（IIFE）中包括两个赋值操作，其中a使用var关键字进行声明，因此其属于函数内部的局部变量（仅存在于函数中），相反，b被分配到全局命名空间。
// 另一个需要注意的是，这里没有在函数内部使用严格模式(use strict;)。如果启用了严格模式，代码会在输出 b 时报错Uncaught ReferenceError: b is not defined,需要记住的是
// 严格模式要求你显式的引用全局作用域。因此，你需要写成：

(function () {
  "use strict";
  var a = (window.b = 5);
})();
console.log(b);
再看一个

(function() {
   'use strict';
   var a = b = 5;
})();
 
console.log(b);  //Uncaught ReferenceError: b is not defined

/*---------------------------*/

(function() {
   'use strict';
   var a = window.b = 5;
})();
 
console.log(b);  // 5
