//单线程优点

// js引擎在js运行时会阻塞ui的渲染（渲染引擎的工作） ==> js引擎线程和渲染线程是互斥的
// 因为js可以修改dom结构，如果在js执行的时候ui线程还在工作，就可能导致不安全的UI渲染，
// 得益于js是单线程运行的，可以达到节省内存（运行内存），节约上下文切换的时间。

// js 栈

//浏览器的event-loop
// console.log('script start')

// async function async1 () {
//   await async2()
//   console.log('async1 end')
// }
// async function async2 () {
//   console.log('async2 end')
// }
// async1()

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function () {
//     console.log('promise1')
//   })
//   .then(function () {
//     console.log('promise2')
//   })

// console.log('script end')

Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})

// 大家先思考一下