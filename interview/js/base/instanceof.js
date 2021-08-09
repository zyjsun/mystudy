// function _instanceof (obj, type) {
//   //Object.prototype.toString.call(obj)
//   let proto = obj.__proto__
//   let prototype = type.prototype
//   while (proto !== null) {
//     if (proto == prototype) {
//       return true
//     } else {
//       proto = proto.__proto__
//     }
//   }
//   return false
// }

function _instanceof (L, R) {
  let O = R.prototype
  let N = L.__proto__
  while (N !== null) {
    if (N === O) return true
    N = N.__proto__
  }
  return false
}

// var str1 = 'hello world'
console.log(_instanceof([], String))
// console.log('111' instanceof String);