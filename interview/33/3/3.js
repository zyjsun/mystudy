(function () {
  let safeLocalStorage = function (key, value) {
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      if (error.name == 'QuotaExceededError') {
        console.log('已经超出本地存储限定的大小！');
        localStorage.clear()
        localStorage.setItem(key, value)
      }
    }
  }
  this.safeLocalStorage = safeLocalStorage
})()
// 手动清理localStorage

//给localStorage设置时间？
function set (key, value) {
  let curtime = new Date().getTime()
  localStorage.setItem(key, JSON.stringify({ val: value, time: curtime }))
}

function get (key, exp) {
  let val = localStorage.getItem(key)
  let dataobj = JSON.parse(val)
  if (new Date.getItem() - dataobj.time > exp) {
    console.log('expires');
  } else {
    console.log('val=' + dataobj.val);
  }
}
