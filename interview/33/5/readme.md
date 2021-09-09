# 1.介绍BOM有哪些对象
1. location
2. history
3. window
4. navaigation
5. window.screen


# 2.以下代码输出什么?
通过var往window上添加的属性会有一个名为f[[configurable]]的特性，其值为==false，不能被删除

# 3.你知道间歇调用 和超时调用吗？
 setInterval setTimeout,一直执行到页面被销毁

# 4.为什么说建议少用setInterval,可以用setTimeout代替？
    定时器指定的时间间隔，表示的是何时将定时器代码添加到消息队列，而不是何时执行，所以真正何时执行代码的时间是不确定的，取决于何时被主线程事件循环到。
    对浏览器来说，每隔多少时间把setinterval放入消息队列
# 5.setTimeout实现setInterval?

# 6.hash和history?
    
