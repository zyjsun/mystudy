//事件机制（事件的触发过程？什么是事件代理？）
//1. 从window上网事件触发处传播，这个过程成为捕获
//2. 处于目标阶段，触发事件
//3. 从触发处往window上事件传播，这个成为冒泡

//stopImmediatePropagation() 还能阻止该事件目标注册别的事件 同类型
//stopPropagation 阻止冒泡和捕获

//事件代理



//跨域
// 1. jsonp (借助script标签没有跨域的限制)
// 2. cors（后端实现跨域）
// 3.webScoket（另一种协议）
// 4.nignx（服务器代理）
// 5.postMessage（通常用于获取嵌入页面的第三方页面数据）
// 6.document.domain（二级域名 a.test.com  b.test.com  document.domain="test.com"）
//二级域名允许跨域


//存储
//cookie,     localStorage,   sessionStorage,    indexDB
//生命周期
//服务器生成    除非被清除     页面关闭就清理     除非被清除
//内存大小
//4k            5M            5M                无限
//通信
//每次都会携带  不参与后端通信  不参与后端通信     不参与后端通信
//在header中   

//cookie: value  http-only       secure              same-site 
//        值    不能通过js访问   限定在https中访问  规定浏览器不能在跨域请求中携带cookie

// service Worker
// 用于https请求中做缓存
// 1. 先注册Service Worker
// 2. 监听install事件后可以开始使用缓存
// 3. 拦截下一次请求并查询是否存在缓存

//缓存(Service Woker,Memory Cache,Disk Cache,Push Cache,网络)
// 缓存位置
// 缓存策略
// 实际场景与应用策略

//Dist Cache:缓存在硬盘（胜在容量大）
//Push Cache：时间短session结束就会释放缓存

//缓存策略 1.强缓存 2.协商缓存
// 强缓存: 通过设置两种HTTP Header实现，Expires和Cache-Control。强缓存意味着
// 在缓存的期间是不需要请求的，state code 为200
// Expires： Web,22,Oct 2021 08:14:00 GMT 在这个时间过期，需要再次请求  根据你电脑时间进行比较

// Cache-Control：max-age=30 30秒后过期

//协商缓存： 通过设置两种HTTP Header实现，Last-Modified 和 ETag.
// 当浏览器发起请求验证的时候，如果资源没有改变，那么服务器就返回304状态码
// 并且更新浏览器的缓存有效期

// Last-Modified: 表示本地文件最后的修改时间，当Last-Modified的值发送给服务器
// 会询问服务器该日期后资源是否更新，有更新就返回资源，没有更新就返回304
// 缺点：本地打开缓存就会文件就会认定是文件修改，只能以秒计时，如果修改文件的时间很短
// ETag: 优先级更高，弥补了Last-Modified的缺陷

// 缓存使用场景
//  1.频繁变动的资源： Cache-Control:no-cache 配合ETag或者Last-Modified
//  2.代码文件：强缓存


// 浏览器的渲染原理（从输入URL到页面渲染发生了什么）
// 前世
// 今生：
// 字节数据转换->字符串->token(标记,构成代码的最小单位)->转换为node->DOM树&&CSSOM树
// ->render树（回流加重绘）

// 为什么操作DOM慢?
// 因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。
// 当我们通过 JS 操作 DOM 的时候，其实这个操作涉及到了两个线程之间的通信，
// 那么势必会带来一些性能上的损耗。操作 DOM 次数一多，
// 也就等同于一直在进行线程之间的通信，
// 并且操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。

// 一次性插入十万条DOM，如何优化？

// 回流 重绘
// 减少回流：display:none

