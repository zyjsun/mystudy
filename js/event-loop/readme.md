# 进程 和 线程
进程: 描述了cpu在运行指令及加载和保存上下文所需要的时间
线程：进程中更小的单位，描述的是执行一段指令所需的时间

# js单线程带来什么好处？
js引擎在js运行时会阻塞ui渲染（渲染引擎的工作）==js引擎线程 和 渲染线程是互斥的

因为js可以修改dom结构，如果在js执行的视乎UI线程还在工作，就可能导致不安全的渲染UI，得益于js是单线程运行的，可以达到节省内存，节约上下文切换的时间

# 执行栈

# setTimeout是如何实现的
1. 浏览器的页面是有消息队列的 和 事件循环系统来驱动的
2. 渲染线程中所有运行在主线程的任务都需要添加到消息队列
3. 事件循环系统会按照顺序执行消息队列的任务
4. 要执行一段异步代码，需要首先将异步添加到消息队列，消息队列里面是按照顺序执行的

//setimeout函数怎么执行的

# eventloop
Task:
    microtask 微任务
        异步回调：
            1.把异步回调函数封装成宏任务，添加到消息队列尾部，当循环系统执行该任务的时候执行回调函数
            2.执行时机是在主函数执行结束之后，当前宏任务结束之前执行回调函数，这通常以微任务的形式实现。

            - 微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后，当前宏任务结束之前

       

    macrotast 宏任务



    微任务包括： process.nextTick,promise.then,promise,MutationObserver
    宏任务包括： script,setTimeout,setInterval,setImmediate,I/O,UI 渲染

    执行顺序：-先执行同步代码，这属于宏任务
              -当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
              - 当执行完所有的微任务后，如果有必要会渲染页面
              - 开始下一轮Event-loop，执行宏任务中的异步代码

              执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。
每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。



