
function flat (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

function flatter (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
    console.log(arr);
  }
  return arr
}
let arr = [[1, 2, 3, [1, 2, 3]], [1, 2], 3]
// console.log(flat(arr))

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null
function deepClone (target, map = new WeakMap()) {
  if (map.get(target)) {
    return target
  }
  if (isObject(target)) {
    map.set(target, true)//为循环引用做标记
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
// let map = new WeakMap()
// let a = deepClone(arr)
// a[0] = 1
// console.log(a, arr);

function sum (a, b) {
  console.log(arguments);
}

sum(1, 2)


