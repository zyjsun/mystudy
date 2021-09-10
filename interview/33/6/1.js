function myInstanceOf (left, right) {
  let proto = left.__proto__
  let prototype = right.prototype
  while (true) {
    if (proto == null) {
      return false
    } else {
      if (proto == prototype) {
        return true
      }
      proto = proto.__proto__
    }
  }
}
let a = [1]
console.log(myInstanceOf(a, Object));