//原型式继承
function Amimal () {
  this.colors = ['black', 'white']
}
Amimal.prototype.getColor = function () {
  return this.colors
}

function Dog () { }
Dog.prototype = new Amimal()

let dog1 = new Dog()
dog1.colors.push('brown')

let dog2 = new Dog()

console.log(dog2.colors);