function Foo () {
  getName = function () { alert(1) }
  return this//是不是对象
}

Foo.getName = function () { alert(2) }

Foo.prototype.getName = function () { alert(3) }

var getName = function () { alert(4) }

function getName () {
  alert(5)
}

Foo.getName()
getName()
Foo().getName()//Foo()执行
getName()

new Foo.getName()
new Foo().getName()
new new Foo().getName()
//2 4 1 1 2 3 3