Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Cannot read property 'reduce' of null or undefined");
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  let O = Object(this)
  console.log(O)

  // 最后返回结果是最后的累计 accumulator
  let accumulator
  let k = 0

  // 初始值条件判断
  if (initialValue) {
    // 提供初值，accumulator 取值为 initialValue
    accumulator = initialValue
  } else {
    // 在没有初始值的空数组上调用 reduce 将报错。
    if (O.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    // 如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true
    // 循环判断当 O 及其原型链上存在属性 k 时开始
    while (k < O.length && !(k in O)) {
      k++;
    }
    // 没有提供初值, `accumulator`取数组中的**第一个值**
    accumulator = O[k++]
  }

  while (k < O.length) {
    if (k in O) {
      let currentValue = O[k]
      accumulator = callback(accumulator, currentValue, k, O)
    }
    k++
  }

  return accumulator
}

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const array2 = [{ label: '十', num: 10 }, { label: '八', num: 8 }];
const reducer2 = (acc, cur) => {
  return {
    label: `${acc.label} ${cur.label}`,
    num: acc.num + cur.num
  }
}

// 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer, 5));
// expected output: 15

console.log(array2.myReduce(reducer2, { label: '一', num: 0 }));

const map = new Map();
for (let str of strs) {
  let array = Array.from(str);
  array.sort();
  let key = array.toString();
  let list = map.get(key) ? map.get(key) : new Array();
  list.push(str);
  map.set(key, list);
}
return Array.from(map.values());

