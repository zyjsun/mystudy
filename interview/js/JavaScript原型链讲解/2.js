var a = new String("abc") //a.__proto__=String [[prototype]]
var b = new Number(666)   //b.__proto__=Number
var c = new Object()      //c.__proto__=Object
//每当新对象被创建的时候，除了各自的属性外还有个隐式的
//__proto__属性被创建->各自的原型对象，还会有.__proto__
//指向原型对象。最终被指向Object(老祖宗)

//                                  .__proto__
//    grandparents   String原型         Number原型             Object原型
//      
//
//       father         String             Number                 Object                                  
//  
//      children     a  __proto__(gp)     b__proto__(gp)       c__proto__(gp)  -->原型对象
//                   [[prototype]]          [[prototype]]       [[prototype]]   construct属性指向原型对象


function Mother (lastName) {
  this.lastName = lastName
}

var son = new Mother('da')
// 1.创建一个新对象son
// 2.新对象会被执行[[prototype]]连接 son.__proto__=Mother.prototype
// 3.新对象和函数调用的this会绑定起来 Mother.call(son,'da')
// 4.执行构造函数中的代码son.lastName
// 5.如果函数没有返回值，那么会自动返回这个新对象