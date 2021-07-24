function a () {
  function b () {
    console.log(this);//默认绑定为window对象
    function c () {
      "use strict";
      console.log(this)
    }
    c()
  }
  b()
}
a()
//window undefine

var name = '小白'

function special () {
  console.log('姓名：' + this.name)
}

var girl = {
  name: '小红',
  detail: function () {
    console.log('姓名' + this.name)
  },
  women: {
    name: '小黄',
    detail: function () {
      console.log('姓名' + this.name)
    },
  },
  special: special,
}

girl.detail();//this指针会指向调用它的这个对象，其中
//如果在全局中申明一样的方法也不影响他
girl.women.detail()
girl.special()

// 小红 小黄 小红