# 作用域
在调用栈中创建出了执行上下文，我们称这个上下文为作用域

当函数执行时，会创建一个成为执行期上下文的内部对象，一个执行期上下文
定以了一个函数执行时的环境，函数每次执行时对象对应的执行上下文都是独一无二的，
所以多次调用一个函数会导致创建多个执行上下文，当函数执行完毕后，它所产生的执行上下文会被销毁
# 作用域链
[[scope]]中存储的执行期上下文对象的集合，这个集合呈链式连接，我们把这种链式连接叫作用域链

# 对象
1. 属性的增 删 改 查
# 构造函数
1. 在函数体最前面隐式的加上 this={}
2. 执行this.xxx=xxx
3. 隐式的返回this


# 包装类
原始值是不能有属性与方法的，属性与方法只有对象才有
