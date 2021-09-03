// 1.对象数组如何去重
const list = [{ id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }, { id: 1, a: 1 }]
// let arr = [1, 1, 2, 3, 4, 2]
// let result = [...new Set(arr)]
// console.log(result);
function objFilter (arr, id) {
  let m = new Map()
  return arr.filter((item) => !m.has(item[id]) && m.set(item[id], 1))
}
function objFilter2 (arr, id) {
  let hash = {}
  return arr.reduce((accum, item) => {
    console.log(hash);
    hash[item[id]] ? '' : hash[item[id]] = true && accum.push(item)
    return accum
  }, [])
}
console.log(objFilter2(list, 'id'));

//2.如何从10000个数中找到最大的10个数（最好的算法是什么）
[1, 2, 3, 5, 9, 534, 333, 45, 2, 32, 74, 876]
var len
function buildMaxHeap (arr) {//建立大顶堆
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}
function heapify (arr, i) {

}

//3.手动封装一个请求函数，可以设置最大的请求次数，请求成功则不在请求
// 请求失败则继续请求直到超过最大次数
function request (url, body, succ, error, maxCount = 5) {
  return fetch(url, body)
    .then(res => succ(res))
    .catch(err => {
      if (maxCount <= 0) return error('请求超时');
      return request(url, body, succ, error, --maxCount);
    });
}

// 4.选择器的优先级
// 内联 id class 标签 通配符（*） important 属性 伪类 伪元素
// ！important>内联（直接写在DOM的行内样式）>id选择器>class=属性=伪类>标签选择器=伪元素>通配符

//5. ForEach,map,和filter的区别？
// forEach遍历到的item是原始类型值时，item的内存地址没有变化，item是引用类型时，
// item的内存地址没有变化，值会被重写

// 6.如何防止map后的数组修改原数组
// 深浅拷贝的区别

// 7。 继承之间的优缺点

// 8.判断一个对象为数组
function isArray (arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}
isArray([1, 2, 3])//true

//9.编写一个函数将列表子元素顺序反转


//10. link和@import的区别
// 来源：link属于XHTML标签，import是CSS提供的方式。
// link方式除了CSS，还可以定义RSS，
// 定义rel连接属性等，而import只能加载CSS。

// 2. 顺序：link是页面加载时同时执行的，
// 而import是在页面加载完之后，才会执行的（所以容易导致样式闪烁，即开始页面没有样式，
// 突然会闪烁一下，然后就有了样式，就我个人比较喜欢link引用的方式）

// 3. js控制的差别：当页面需要使用javascript控制dom改变样式的时候，
// 只能使用link标签，因为import不是js操作dom可以控制的。也不支持js操作dom来控制
