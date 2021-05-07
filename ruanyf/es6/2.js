
function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new Foo()


// // let arr = ['a', 'b', 'c', 'd']
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(i, arr[i]);
// // }
// // for (let item of arr) {
// //   // console.log(item);
// //   item = item + 1
// //   console.log(item);
// // }
// // arr.forEach((item, index) => {
// //   item = item + 1
// // })
// // let newArr = arr.map((item, index) => {
// //   return item + 1
// // })

// // console.log(newArr);



// let arr = ['a', 'b', 'c', 'd']

// Object.prototype.d = '4'
// const obj = { // const obj = new Object()
//   a: 1,
//   b: 2,
//   c: 3
// }
// obj.e = 5


// for (let i in obj) {
//   console.log(obj[i]);
// }




// // console.log(Object.keys(obj));
// // obj.name = 'aa'
// // for (let i of Object.keys(obj)) {
// //   console.log(obj[i]); // obj.i
// // }


// // for (let i of arr) {
// //   console.log(i);
// // }



function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new Foo()
for (let key in bar) {
  console.log(`index: ${key} value: ${bar[key]}`);
}

// 数字属性应该按照索引值的大小升序排列，字符串属性根据创建的顺序排列




