// function Point(x,y){
//     this.x=x;
//     this.y=y;
// }
// Point.prototype.toString=function(){
//     return `(${this.x},${this.y})`
// }

// var p=new Point(1,2);
// console.log(p)


class Point{
    constructor(x,y){//代表工厂
        this.x=x;
        this.y=y;}
   toString(){
    return `(${this.x},${this.y})`
      }
}

// let obj1={
//     name:'zz'
// }
// let obj2={
//     age:12
// }

// let obj3=Object.assign(obj1,obj2)//赋值
// console.log(obj3)
// console.log(obj1)

// console.log(typeof(Point)) 可枚举可以被遍历


