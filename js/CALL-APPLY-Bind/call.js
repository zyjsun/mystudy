//将要改变的this指向的方法挂载到目标this执行返回
var a = {
  name: '金总',
  // bar:function(){
  //     console.log(this.name);
  // }
}
// var b={
//     name:'老哥',
//     fn:function(){
//         console.log(this.name)
//     }
// }

// var fn=function(){
//             console.log(this.name)
//         }
//  fn.call(a)

// a.bar()

//call实现

//typeof原始类型，特殊function
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not function');
  }

  context = context || window
  context.fn = this //this为test
  context.fn()//a把test函数执行掉了
  let arg = [...arguments].slice(1)//解构出来 数组取出赋值

  let result;
  result = context.fn(...arg)
  //   console.log(arguments)  传来的参数
  delete context.fn
  return result
}

function test (x, y, z) {
  console.log(this.name)
  console.log(x, y, z);
}

test.mycall(a, 1, 2, 3)//让test的this到a去