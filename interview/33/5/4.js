// function a(){
//   a()
// }

setTimeout(() => {
  setTimeout(arguments.callee, 1000)
  console.log(1);
}, 1000)
//callee当前执行的函数