// const json={
//     a: {b:{c: 1}},
//     d: {e:2},
// }
// const path=['a','b','c']

// let p=json
// path.forEach(k=>{
//     p=p[k]
// })


function _instanceof (obj, type) {
  //Object.prototype.toString.call(obj)
  let proto = obj.__proto__
  let prototype = type.prototype
  while (proto !== null) {
    if (proto == prototype) {
      return true
    } else {
      proto = proto.__proto__
    }
  }
  return false
}

var str1 = new String('hello world')
console.log(_instanceof(str1, Object))