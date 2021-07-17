// function test(person) {
//     person.age = 20
//     person = {//1004 引用地址
//       name: '袁总',
//       age: 30
//     }
//     return person
//   }
//   const p1 = {//1003
//     name: '胡总',
//     age: 25
//   }
//   const p2 = test(p1)
//   console.log(p1);//{name:'胡总'，age:'20'}
//   console.log(p2);//{name:'袁总'，age:'30'}

// const Person=function(){}

// const p1=new Person()

// console.log(p1 instanceof Person) true

// var str='hello'
// console.log(str instanceof String) false

//var str1=new String('hello world')
//console.log(str1 instanceof String)//true

// 4+[1,2,3]// '41,2,3'

//'a' +(+'b')  //'aNaM'

function getType (obj) {
  let type = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj)
  // .replace(/^\[object (\S+)\]$/, '$1');  // 注意正则中间有个空格
}

console.log(getType([1, 2, 3, 4]))