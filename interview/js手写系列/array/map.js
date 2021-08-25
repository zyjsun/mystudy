


// 参数:接受两个参数，一个是回调函数，一个是回调函数的this值(可选)。
// 其中，回调函数被默认传入三个值，依次为当前元素、当前索引、整个数组。

// 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

// 对原来的数组没有影响 map
Array.prototype.myMap = function (callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'map' of null or undefined");
  }

  if (Object.prototype.toString.call(callbackFn) != "[object Function]") {
    throw new TypeError(callbackFn + ' is not a function')
  }

  // 草案中提到要先转换为对象
  let O = Object(this);
  let T = thisArg;

  let len = O.length >>> 0;
  let A = new Array(len);

  for (let k = 0; k < len; k++) {
    if (k in O) {
      let kValue = O[k];
      // 依次传入this, 当前项，当前索引，整个数组
      let mappedValue = callbackFn.call(T, KValue, k, O);
      A[k] = mappedValue;
    }
  }
  return A;
}

// reduce
// 其中有几个核心要点:

// 1、初始值不传怎么处理

// 2、回调函数的参数有哪些，返回值如何处理。

Array.prototype.myreduce() = function (callbackFn, initiaValue) {
  // 异常处理，和 map 一样
  // 处理数组类型异常
  if (this == null || this == undefine) {
    throw new TypeError("Cannot read property 'reduce' of null or undefined")
  }
  //处理回调类型异常
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackfn + ' is not a function')
  }
  let O = Object(this)
  let len = O.length >>> 0
  let k = 0
  let accumulator = initiaValue;
  if (accumulator === undefined) {
    for (; k < len; k++) {
      //查找原型链
      if (k in O) {
        accumulator = O[k]
        k++
        break
      }
    }
  }
  // 表示数组全为空
  if (k === len && accumulator === undefined)
    throw new Error('Each element of the array is empty');
  for (; k < len; k++) {
    if (k in O) {
      // 注意，核心！
      accumulator = callbackfn.call(undefined, accumulator, O[k], k, O);
    }
  }
  return accumulator;
}

// let nums = [1, 2, 3];
// let newNums = nums.myreduce(function(preSum,curVal,currentIndex,array) {
//   return preSum + curVal; 
// }, 0);
// console.log(newNums)


function deepClone () {
  if (typeof obj !== 'object' || obj == null) {
    return object
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}