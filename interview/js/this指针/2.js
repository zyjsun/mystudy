var name = '小红'
function a () {
  var name = '小白'
  console.log(this.name)
}

function d (i) {
  return i()
}

var b = {
  name: '小黄',
  detail: function () {
    console.log(this.name)
  },
  bibi: function () {
    return function () {
      console.log(this.name)
    }
  },
}

var c = b.detail;
b.a = a
var e = b.bibi();//只是赋值
a()//默认绑定指向window  小红
c()//普通函数赋值给c,先当于函数表达式，全局范围内定义的函数 小红
b.a()//小黄 
d(b.detail)//全局申明，全局范围函数d 小红
e()// 实际掉用的是全局范围中的e , 小红
//随函数的出现而出现，执行的环境是什么
//默认绑定 隐式绑定 硬绑定 构造函数绑定
