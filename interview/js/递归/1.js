//细胞分裂  白色->绿色->黄色->黑色(没了) 绿色由白色决定，黄色由绿色决定， 白色 由 白绿黄决定
function total (n) {
  var yellow = function (n) {
    if (n == 0 || n === 1) return 0
    return green(n - 1)
  }
  var green = function (n) {
    if (n === 0) return 0
    return white(n - 1)
  }
  var white = function (n) {
    if (n === 0) return 1
    return white(n - 1) + green(n - 1) + yellow(n - 1)
  }
  return yellow(n) + green(n) + white(n)
}

console.log(total(0))
console.log(total(1))