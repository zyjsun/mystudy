// let arr=[1,2,3,4,5]
// var result=arr.filter((item,index)=>{
//   return item>3
// })//返回的为一个数组
// //Object 的key值只能是字符串
// console.log(result)

// let newArr=arr.map(x=>{
//     return x*2
// })
// console.log(newArr)

// const m=new Map()
// const o={p: 'Hello World'}

// m.set(o,'content')
// m.delete(o)

// console.log(m.has(o));

// const m=new Map([
//     ['name','zz'],
//     ['title','作家']
// ])
//等价于
// const item=[
//     ['name','zz'],
//     ['title','作家']
// ]
// const m=new Map()

// item.forEach(([key,val])=>{
//     return m.set(key,val)
// })
// // m.has('name')
// console.log(m)

const set=new Set([
    ['foo',1],
    ['bar',2]
])

 const m=new Map(set)
// m.clear()//清空所有值
// m.get('foo')

for(let key of m.entries()){
    console.log(key[0],key[1])
}
console.log([...m.entries()])