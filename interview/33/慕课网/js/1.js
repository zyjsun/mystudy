function paixu (arr) {
  let result = []
  let m = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1)
    } else {
      m.set(arr[i], 1)
    }
  }

  // let obj = {}
  console.log(m);
  for (let key of m) {

    if (key[1] > 1) {
      result.push(key[0])
      //   for(let i=0;i<result.length;i++){
      //         if(m.get(result[i])>m.get(key[0]))
      //   }
      // }
      // obj[key[1]] = key[0]//用number做为key值对象会自动排序
    }
  }
  // for (let key in obj) {
  //   result.push(obj[key])
  // }
  result.sort((a, b) => {
    return m.get(a) - m.get(b)
  })
  return result
}

let arr = [2, 3, 4, 4, 4, 2, 4, 5, 6, 7, 3, 1, 3, 3, 3, 1, 1]
console.log(paixu(arr));