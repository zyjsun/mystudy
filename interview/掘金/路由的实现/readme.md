# 路由
描述的是URL和处理函数之间的一种映射关系

在前端单页面应用中，路由描述的是URL和UI的映射关系

# 实现路由
1.改变URL，页面不刷新
2.如何检测URL变化

# hash
在URL后面 #部分
因为hash的改变天生就不会引起页面的刷新，
所以在URL后面拼接hash值，在通过监听hasChange事件检测到url的变化，
从而去显示不同的dom结构

# history
html 提供了一个history对象，该对象提供了 pushState 和 replaceState两个方法
history提供了类似于haschange的事件popState,通过a标签改变url是不会触发popState，
通过pushState/replaceState/a不会触发popState事件
只有浏览器前进和后退才触发

pushState 和 replaceState 都是 HTML5 的新 API，他们的作用很强大，可以做到改变浏览器地址却不刷新页面。这是实现改变地址栏却不刷新页面的重要方法。
