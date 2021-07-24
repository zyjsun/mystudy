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