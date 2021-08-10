function deepClone (obj) {
  function isObject (o) {
    return (typeof o === 'object' || typeof o === 'function') && o
  }
  // if (!isObject(obj)) {
  //   throw new Error('非对象')
  // }
  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })
  return newObj
}

// let a = {
//   z: 1,
//   c: {
//     d: 2,
//     v: 3
//   }
// }
const c = 8
let b = deepClone(c)
// a.c.v = 5
console.log(b)