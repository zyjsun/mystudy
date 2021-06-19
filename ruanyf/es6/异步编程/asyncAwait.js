// fetch('https://www.baidu.com')
//   .then((response) => {
//     console.log(response);
//     return fetch('https://www.baidu.com/test')
//   }).then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   })



// async function foo() {
//   try {
//     let res1 = await fetch('https://www.baidu.com')
//     console.log(res1);
//     let res2 = await fetch('https://www.baidu.com/test')
//     console.log(res2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// foo()


// await 100
let promise_ = new Promise((resolve, reject) => {
  resolve(100)
})

promise_.then((a) => {
  console.log(a);
  console.log(2); 
  //....
})



async function bar() {
  console.log(1);
  // let a = await 100
  // console.log(a);
  // console.log(2); 
}
console.log(0);

bar() // 启动bar协程

console.log(3);

// async(function bar() {

// })
