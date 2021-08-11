// 并发与并行的区别


//回调（什么是回调函数？回调函数的缺点？如何解决回调地狱？）

// 缺点：代码的耦合度高，嵌套多层很难处理错误，不能使用try catch 
// 捕获错误，不能直接return

//Generation

function* foo (x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}

//Promise(promise特点？什么是poromise链？promise构造函数)
new Promise((resolve, reject) => {
  resolve('ok')
  reject('false')//无效
})

//async await (和promise的区别，await的原理)

//setTimeout setInterval requestAnimationFrame
// 修正setTimeout
function loop () {
  count++
  // 执行代码所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval)
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / 1000
  let sCeil = Math.ceil(s)
  let sFool = Math.floor(s)
  // 下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log(`时：${h}, 分：${m}, 毫秒：${s}, 秒向上取整：${sCeil}, 代码执行时间：${offset}, 下次循环间隔：${currentInterval}`);
  setTimeout(loop, currentInterval);
}

setTimeout(loop, currentInterval);