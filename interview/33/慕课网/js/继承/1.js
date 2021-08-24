//原型式继承
// function Amimal () {
//   this.colors = ['black', 'white']
// }
// Amimal.prototype.getColor = function () {
//   return this.colors
// }

// function Dog () { }
// Dog.prototype = new Amimal()

// let dog1 = new Dog()
// dog1.colors.push('brown')

// let dog2 = new Dog()

// console.log(dog2.colors);

// 问题1：原型中包含的引用类型属性将被所有实例共享；
// 问题2：子类在实例化的时候不能给父类构造函数传参；问题

//构造函数继承
function Amimal () {
  this.name = this.name
  this.getName = function () {
    return this.name
  }
  this.colors = ['black', 'white']
}
Amimal.prototype.getColor = function () {
  return this.colors
}

function Dog (name) {
  Amimal.call(this, name)
}
Dog.prototype = new Amimal()

let dog1 = new Dog('zz')
// dog1.colors.push('brown')

// let dog2 = new Dog()

// console.log(dog2.colors);
console.log(dog1.getName());
// 但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。

//组合继承
// 基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性
function Animal1 (name) {
  this.name = name
  this.colors = ['black', 'white']
}
Amimal1.prototype.getName = function () {
  return this.name
}

function Cat (name, age) {
  Animal1.call(this, name)
  this.age = age
}
Cat.prototype = new Animal1()
Cat.prototype.constructors = Cat

let cat1 = new Cat('nx', 2)
cat1.colors.push('green')
let cat2 = new Cat('xx', 1)
console.log(cat2);

// 寄生式组合继承
// 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了 2 次父类构造函数，第一次是在 new Animal()，第二次是在 Animal.call() 这里。

// 不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 F 获取父类原型的副本。

// - Dog.prototype =  new Animal()
// - Dog.prototype.constructor = Dog

// + function F() {}
// + F.prototype = Animal.prototype
// + let f = new F()
// + f.constructor = Dog
// + Dog.prototype = f

function object (o) {
  function F () { }
  F.prototype = o
  return new F()
}
function inheritPrototype (child, parent) {
  let prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}
inheritPrototype(Dog, Animal)


