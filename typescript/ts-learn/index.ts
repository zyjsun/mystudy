// let a=1

// function greet(person:string){
//     return 'hello,'+person
// }

// console.log(greet('TypeScript'))
let isDone:boolean=false

let count:number=1

let zz:string='1'

// let sym=Symbol('hello')
let sym=Symbol()

console.log(typeof sym)
console.log(zz)
let obj={
    [sym]:'hello'
}
// console.log(obj[sym])

// let list: number[]=[1,2,3]
// list.push('1')
let list:Array<number>=[1,2,3]//泛型定义法

//元组 Tuple
let TupleType: [string,boolean]=['hello',true]
let tt:any=['11',11,true]//可以被赋值为任意类型

// //Enum 类型 数字枚举(双向映射) 字符串枚举
// enum Direction{
//     NORTH=3,
//     SOUTH,
//     EAST,
//     WEST
// }
// let dir: Direction=Direction.NORTH
// console.log(dir)
// console.log(Direction.WEST)
//常量枚举
//  const Direction{
//     NORTH=3,
//     SOUTH,
//     EAST,
//     WEST
// }


