const s=new Set(['red','green','blue'])//new object
// Array.from([1,2,3,4,5,1,2,3]).forEach((element,i) => {
//     s.add(element)
// });
// let arr=[...s]

// console.log(arr,s.size)

//添加值时不会判断类型  Nan===Nan 为false  {}==={} 引用地址不一样 不相等
//在 set 中NaN相等

// s.add可以链式增加

let obj=new Object()
const arr=[1,2,3,4]
//数组判断当前对象是否具有每个值some
console.log(arr.indexOf(2))
obj.a=1
console.log(obj.hasOwnProperty('a'),s.has(1))
//对象判断当前对象是否具有每个值
delete obj.a;
// console.log(Array.from(s))
//强值转换为数组 for of 遍历对象 for in 遍历数组，返回数组下标，遍历到原型上的东西

//set 遍历

// for(let item of s.values()){
//     // console.log(s.keys())
//     console.log(item)
// }

for(let item of s.entries()){//返回键值对
    // console.log(s.keys())
    console.log(item)
}
