// function* genDemo() {
//   console.log('开始执行第一段');
//   yield 'generator 2'

//   console.log('开始执行第二段');
//   yield 'generator 2'

//   console.log('开始执行第三段');
//   yield 'generator 2'

//   console.log('执行结束');
//   return 'generator 2'
// }
// console.log('main 0');
// let gen = genDemo()
// console.log(gen.next().value);
// console.log('main 1');
// console.log(gen.next().value);
// console.log('main 2');
// console.log(gen.next().value);
// console.log('main 3');
// console.log(gen.next().value);
// console.log('main 4');



// function* foo() {
//   let res1 = yield fetch('https://www.baidu.com')
//   console.log(res1);
//   let res2 = yield fetch('https://www.baidu.com/test')
//   console.log(res2);
// }
// let gen = foo() // 创建gen协程

// // co(foo())

// function getGenPromise(gen) {
//   return gen.next().value
// }
// getGenPromise(gen).then((response) => {
//   console.log(response);
//   return getGenPromise(gen)
// }).then((response) => {
//   console.log(response);
// })
