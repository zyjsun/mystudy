// function foo(a){
//     var b=2
//     function bar(){

//     }
//     var c=3
// }
(function(){
    var a=3
})()//自执行函数

let arr=[]
// for(var i=0;i<10;i++){//var全局
//     arr[i]=function(){
//         console.log(i);
//     }//每次添加·一个函数
// }
function test() {
    var arr1 = []
    for (var i = 0; i < 10; i++) {
      (function(j) {
        arr1[j] = function() {
          console.log(j);
        }
      })(i)
    }
    return arr1
  }
  
  var myArr = test()
  
  
  
  for (var j = 0; j < 10; j++) {
    myArr[j]()
  }
// for(let item of arr){
//     item()
// }