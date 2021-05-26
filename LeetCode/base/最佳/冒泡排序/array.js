let arr=[5,3,2,4,1,'z','y','j']
// const bubble= arr=>{
//     for(let j=0;j<arr.length-1;j++){
//         for(let i=0;i<arr.length-j-1;i++){
//             if(arr[i]>arr[i+1]){
//                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//             }
//     }
// }
//     return arr
// }
// console.log(bubble(arr))
console.log(arr.indexOf(6))//没有就返回负一
console.log(arr.reverse())
let x=123
let y=x.toString()
console.log(y.split(1,2))

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
//splice 方法
// 第一个参数（2）定义了应添加新元素的位置（拼接）。

// 第二个参数（0）定义应删除多少元素。

// 其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

// splice() 方法返回一个包含已删除项的数组：