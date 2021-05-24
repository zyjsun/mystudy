console.log('script start');//同步

async function async1() {//异步
  await async2()//await会阻塞执行
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}
async1()

setTimeout(function() {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {//把promise先执行 浏览器做了优先级处理
  console.log('Promise');
  resolve()
})
  .then(function() {
    console.log('promise1');
  })
  .then(function() {
    console.log('promise2');
  })

console.log('script end');

// script start->async2 end->Promise->script end->async1 end-> promise1-> promise2-> setTimeout