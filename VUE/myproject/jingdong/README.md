1. dispatch 方法，派发一个action,名字叫做change
2. 感知change这个action，执行store中action下面的change函数
3. commit提交一个叫做change的数据改变
4. mutation感知到提交的change改变，执行change方法改变数据

composion api
setup函数 为created实例初始化之前就创建的

//ref,reactive 响应式引用
//原理，通过proxy对数据进行封装，当数据变化时，触发模板内容的更新
# 例子
const {ref}=Vue;
// proxy,'dell'变成proxy({value: 'dell'})这样一个响应式引用
let name=ref('dell')
name.val='lee'
return { name}
ref处理基础类型的数据
reactive处理非基础数据类型

const {reactive}=Vue;
//proxy,{name: 'dell'}变成proxy({name:'dell'})}这样的一个响应式引用
const nameObj=reactive([123])

比vue2 性能更好
