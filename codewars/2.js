function myinstanceOf (left, right) {
  if (typeof left !== 'object' || left == null) return false
  let proto = Object.getPrototypeOf(left)
  //拿到原型的参数对象
  while (true) {
    if (proto == null) return false
    if (proto == right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}