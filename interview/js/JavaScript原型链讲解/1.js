function Supermarket () { }
Supermarket.prototype.product = '口罩'
//同时也将person.__proto__=Supermarket.prototype
function Shop () { };
Shop.prototype = new Supermarket()//更改了shop的原型对象，对象指向supermarket
// person.__proto__=Shop.prototype
var person = new Shop();
//当实例对象没有该属性时，实例就会找它的原型对象上面有没有这个属性
console.log(person.product)

// instanceof 判断属性是什么类型 __proto__指向的属性

var F = function () { }

Object.prototype.a = function () { }
Function.prototype.b = function () { }

var f = new F() //只有a  b保存至大写Function中

//等执行栈里面的正常任务执行之后会执行队列里面的回调函数结果
//JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。