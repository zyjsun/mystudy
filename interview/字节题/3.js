//箭头函数与普通函数有什么区别？如何判断一个函数是普通函数还是箭头函数
// 1.定义箭头函在数语法上要比普通函数简洁得多
// - 如果箭头函数没有参数，直接写一个空括号即可。

// - 如果箭头函数的参数只有一个，也可以省去包裹参数的括号。

// - 如果箭头函数有多个参数，将参数依次用逗号(，)分隔，包裹在括号中即可。
// 2. 箭头函数没有 prototype (原型)，所以箭头函数本身没有this，箭头函数不会创建自己的this，call | apply | bind 无法改变箭头函数中this的指向，箭头函数不能作为构造函数使用​​​​​​​
// 3.箭头函数不绑定arguments，取而代之用rest参数...代替arguments对象，来访问箭头函数的参数列表，箭头函数不能用作Generator函数，不能使用yield关键字


// 1. 箭头函数中和普通函数里的this指向不同，箭头函数中其实没有this，在箭头函数中调用的this是在箭头函数所属上下文中的this，普通函数里的this指向的是他自己内部
// 2. 箭头函数都是匿名函数，普通函数可以命名
// 3. 箭头函数不能用于构造函数，不能使用new。普通函数可以用于构造函数，创建对象实例
// 4. 箭头函数不绑定arguments
// 5. 箭头函数无原型
//new

//① JS内部首先会先生成一个对象； ② 再把函数中的this指向该对象； ③ 然后执行构造函数中的语句； ④ 最终返回该对象实例。

myNew.prototype.say=function(){
    console.log('hello')
}
function isNew(){
    let obj={}
    let constructor=Array.prototype.slice.call(arguments)
    obj.__proto__=constructor.prototype
    let result= constructor.apply(obj,arguments)//往当前obj挂了个name,pwd属性
     return typeof result==='Object'&&result!==null?result:obj
}
function myNew(name,pwd){
    this.name=name
    this.pwd=pwd
}
// let my=new myNew('zz','yy')
// my.say()
// console.log(my)

let test=isNew(myNew,'zz','123')//new myNew(arguments)
test.say()