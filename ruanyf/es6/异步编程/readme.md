# Promise 是如何消灭嵌套回调的
1. Promise实现了回调函数的延时绑定
2. 需要将回调函数 onResolve的值穿透到最外层

# Promise怎么处理异常的
通过最后一个promise的catch来捕获整条链上的错误（嵌套回调每一个任务都需要独立的错误处理）

因为Promise对象的错误具有"冒泡"性，会一直向后传递，直到被onReject函数处理或catch语句捕获为止