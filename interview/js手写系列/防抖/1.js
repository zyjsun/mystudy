
// 1）防抖

// 原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// 适用场景：
// 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
// 搜索框联想场景：防止联想发送请求，只发送最后一次输入
// 简易版实现
function debounce (func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait);
  }
}

/** 防抖:
 * 应用场景：当用户进行了某个行为(例如点击)之后。不希望每次行为都会触发方法，
 * 而是行为做出后,一段时间内没有再次重复行为，
 * 才给用户响应
 * 实现原理 : 每次触发事件时设置一个延时调用方法，
 * 并且取消之前的延时调用方法。
 * （每次触发事件时都取消之前的延时调用方法）
 *  @params fun 传入的防抖函数(callback) delay 等待时间
 *  */
const debounce = (fun, delay = 500) => {
  let timer = null //设定一个定时器
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}
/** 节流
 *  应用场景:用户进行高频事件触发(滚动)，但在限制在n秒内只会执行一次。
 * 
 *  实现原理: 每次触发时间的时候，判断当前是否存在等待执行的延时函数
 * @params fun 传入的防抖函数(callback) delay 等待时间
 * */

const throttle = (fun, delay = 1000) => {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    flag = false
    setTimeout(() => {
      fun.apply(this, args)
      flag = true
    }, delay)
  }
}