// function a(){
//   a()
// }

setTimeout(() => {
  setTimeout(argument.callee, 1000)
}, 1000)
//callee当前执行的函数