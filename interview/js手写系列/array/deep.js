function deepClone (obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  obj instanceof Array ? result = [] : result = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

let a = {
  a: 1,
  b: [1, 2, 3],
  c: 'a'
}
a.prototype.z = '1'


console.log(a.hasOwnProperty('z'))
// let b = deepClone(a)
// console.log(b);
// b.a = 2
// console.log(a);
