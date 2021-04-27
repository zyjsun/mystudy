//js es5 里面没有提示class 关键字
var Cat={//首字母大写 类 的模板
    name:'',//属性
    color:''//属性
}

var cat1={};
cat1.name='white';
cat1.color='red';
//没有关系

var cat2={
    name:'xiaohuang',
    color:'yellow'
}
//封装，JS函数来创建对象的
function cat(name,color){
    return {
        name: name,
        color:color
        }//普通函数
}
var cat3=cat('大大','yello')
var cat4=cat('小小','black')
console.log(cat3,cat4)

function Dog(name,color){//类
    //this new 过后的实例
    this.name = name
    this.color = color//构造函数  一般不放方法
    //     this.sayHello = function(){
    //     console.log("Wang-Wang-Wamg")
    // }
    
}

//this 由new提供
let dog1=new Dog('tom','blue')
console.log(dog1)
let dog2=new Dog('蜗牛','red')
console.log(dog1.name,dog2.name,'-----')
console.log(dog1.constructor===Dog);//函数名即为构造函数
console.log(dog1 instanceof Dog)//实例
//console.log(dog1==dog2)
 
//如何添加方法
//jser 来到喵星人的世界
//实例化时就执行 constructor

//任何对象的sayHello都会执行一次，

// Dog.prototype.sayHello=function(){
//     console.log('wang wang wang');
// }//class 关键字 围城 比喻
// Dog.prototype.eat=function(){
//     console.log('lai yi xia');
// }
const o={//原型对象没有血缘关系
  sayHello:function(){
        console.log('wang wang wang');
    },
    eat:function(){
        console.log('lai yi xia');
    }
}
// JS原型机制
// constructor +prototype
// =  JS面向对象
//JS基于原型式的面向对象
//  没有血缘关系 
//  构造函数如同火车头  
//  原型对象如同车厢， 
//  有好多节 
//  .prototype
//函数是一个对象
Dog.prototype=o;
let dog3=new Dog('蜗牛2','red')
 dog3.sayHello();
 dog3.eat();
console.log(dog3.__proto__);//__proto__属性
console.log(Dog.prototype.isPrototypeOf(dog3));//继承
console.log(dog3.hasOwnProperty("name"))
console.log(dog3.hasOwnProperty("sayHello"))