# 1.安全类型的检测 typeof 和 instanceof的区别及缺陷？
  Object.prototype.toString.call(value)

# 2.instanceOf
function myInstanceOf (left, right) {
 let proto = left.__proto__
 let prototype = right.prototype
 while (true) {
  if (proto == null) {
   return false
  } else {
   if (proto == prototype) {
​    return true
   }
   proto = proto.__proto__
  }
 }
}

# 如果忘了写new
function Person(){
  if(this instanceof Person){
    this.name='zz'
  }else{
    return new Person()
  }
  
}
let p=Person()//p为undefined
window.name='zz'

# 4.惰性载入函数?


# 5.防抖

# 6.谈一下节流

# 7.谈一下 requestAnimationFrame
<!-- 根据电脑的刷新频率来执行的，人眼捕获觉得流畅 



-->

# 你知道web worker吗？
  //创建出的对象，对象可以操作js不会引起浏览器的渲染