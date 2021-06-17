let ary=[1,2,[3,[4,5]],6]//多维数组换成一维数组


// const [arr]=[...ary]
// console.log(arr)
//1

// while(ary.some(Array.isArray)){//判断是不是数组
//     ary=[].concat(...ary) //1,2,[3,[4,5]],6 先解构后运算，数组中有数组会进行一次解构
//     console.log(ary)
// }

//2
// let str=JSON.stringify(ary)
// ary = str.replace(/(\[|\])/g, '');
// console.log(ary)

//第0中处理:直接的调用3
// arr_flat = ary.flat(Infinity);
// console.log(arr_flat)

//摊平一个堆4
// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(a, b) {
//       return a.concat(b);
//     },
//     []
//   );第一个上一次执行的结果,方法将一个累加器及数组中每项（由左至右）回呼函式，将元素化为一组值。

// while(ary.some(Array.isArray)){//判断是不是数组
//         ary=ary.reduce((pre,cur)=>pre.concat(cur),[])
//         console.log(ary)
//     }

//第三种处理：递归处理5
let result = [];
let fn = function(ary) {
  for(let i = 0; i < ary.length; i++){
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      result.push(item);
    }
  }
}
