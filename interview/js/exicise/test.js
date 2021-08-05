function Foo () {
  this.getName = function () {
    console.log(3);
    return {
      getName: getName
    }
  };
  getName = function () {
    console.log(1);
  };
  return this
}
Foo.getName = function () {//静态属性
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(6);
};
var getName = function () {
  console.log(4);
};

function getName () {
  console.log(5);
}

Foo.getName()//2 静态方法
getName()//4
console.log(Foo())//window
Foo().getName()//1
getName()//1
new Foo.getName()//2
new Foo().getName()//3
new Foo().getName().getName()//3 1
new new Foo().getName()//3

