function Foo (name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  }
  this.getAge = function () {
    return this.age;
  }
}

function newObj (classname) {
  let obj = Object.create({})
  console.log(arguments)
  let agu = Array.prototype.slice.call(arguments, 1)
  obj._proto_ = classname.prototype;
  classname.apply(obj, agu);
  return obj;
}


let cc = newObj(Foo, 'hh', 12)
console.log(cc)
