// let a=1
var _a;
// function greet(person:string){
//     return 'hello,'+person
// }
// console.log(greet('TypeScript'))
var isDone = false;
var count = 1;
var zz = '1';
// let sym=Symbol('hello')
var sym = Symbol();
console.log(typeof sym);
console.log(zz);
var obj = (_a = {},
    _a[sym] = 'hello',
    _a);
// console.log(obj[sym])
// let list: number[]=[1,2,3]
// list.push('1')
var list = [1, 2, 3]; //泛型定义法
//元组 Tuple
var TupleType = ['hello', true];
var tt = ['11', 11, true]; //可以被赋值为任意类型
//Enum 类型
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
console.log(dir);
