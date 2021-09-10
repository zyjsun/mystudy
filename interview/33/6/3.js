

function debouncce (fn, arg) {
  let timer = null
  return function () {
    let context = this//箭头函数不行
    let arg = [...arguments]
    clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(context, arg)
    }, delay)
  }
}

//节流
function throtle (fn, delay) {
  let oldDate = new Date()//触发时的时间
  return function () {
    let newDate = new Date()
    let context = this
    let arg = [...arguments]
    if (newDate - oldDate >= delay) {
      fn.apply(context, arg)
      oldDate = new Date()//n秒执行一次
    }
  }
}
