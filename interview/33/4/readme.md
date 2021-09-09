# let 和 const十连问？

# js事件流？
  事件模型：
  1. DOMo级事件模型 btn.onclick
  2. IE事件模型 attachevent
  3. DOM2级事件模型 addEventLister
# 2.介绍一下这三个事件模型的区别？
      DOMo:
       1. this指向绑定的元素
       2. 当绑定多个同事件类型的事件时：后面的事件会覆盖前面的

      IE模型：
      1. this指向window
      2. 当绑定多个同事件类型事件时：从头往前一个一个执行
      3. 只有两个参数
      4. 目标阶段 冒泡阶段
      5. window.event.srcElement获取目标元素
      DOM2: 
      1.指向window
      2.当绑定多个同事件类型事件时：执行前者
      3. 三个参数
      4. 捕获阶段，目标阶段，冒泡阶段
      5. event.target获取目标元素
# 3.介绍一下事件流？
事件流描述的是从页面中接收事件的顺序。



# 4. 怎么阻止冒泡和捕获一级默认事件？
stopProgratation()

# 5.事件委托
  优点：  1. 可以大量节约内存占用，减少事件的注册
          2.  当新增子对象时无需对其进行事件绑定，适用于动态内容
  缺点： 可能出现事件误判，给不需要触发事件的dom绑定事件

# 6.自定义事件
  自定义事件包含on,off,emit,once方法

# 7.怎么判断js脚本是否加载完毕？并在加载完毕后执行？
async defer  
answer js.onreadystatechange    js.onload

# 8.怎么判断页面是否加载完毕？
  window.onload   $(document).ready(function(){})
  document.onreadystatechange