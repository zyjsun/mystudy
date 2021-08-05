# Vue的优缺点？缺点
- 优点：渐进式，组件式，轻量级，虚拟Dom，响应式，单页面路由，数据视图分开
- 缺点： 不利于SEO，首屏加载慢，vue2不支持IE8以下，vue3不支持IE11以下

# MVVM是什么？跟MVC有什么区别？
M：模型，负责取数据
V: 视图，负责渲染展示数据
VM：控制器，用于交互，比如点击事件 Model-View
m->v DataBinding  v->m DomListeners
区别： MVVM的设计模式更简洁，简化了业务与界面的依赖，解决了数据的频繁更新的问题，不再需要操作DOM，这种低耦合的模式提高了代码的复用性

# Vue和Jquery的区别
- Jquery操作DOM频繁，性能开销大
- vue集成了一些库，比如router，vuex，大大的提高了开发效率

# 为什么data要是一个函数返回一个对象？
   如果data是一个对象，那么一个组件被很多父组件引用，修改其中一个父组件的data的某个属性值，那么其他父组件的值也会跟着改变。因为对象是引用类型，在堆中存放，共用一个地址。而为函数的话，他们有自己的作用域，这样实例之间不会互相影响而改变data的值

# vue修饰符

# vue指令

# 组件的传值方式有哪些？
1. 父到子 子 props接受父组件的传值
2. 子到父 子组件$emit(事件名，参数) 子组件绑定事件名
3. $refs获取子组件实例，进而获取数据
4. 组件可以使用 $parent 和 $children 获取父组件实例和子组件实例，进而获取数据
5. provide 和 inject
6. vuex
7. eventsBus

# 路由有哪些模式？区别是什么？
hash模式：hash模式通过#后面内容的变更，触发hashchang事件
history模式：通过pushState和replaceState切换url,触发popstate

# computed和watch区别
1. computed: 依赖一个已有的变量来计算，具有缓存机制，如果依赖值不变的情况下，会直接读取缓存进行复用，computed不能进行异步操作。
2. watch监听某个变量的变化，并执行响应回调。
computed 一对多 watch 多对一

# 生命周期 actived deactived
actived: 命中缓存时调用
deactived: 停止使用缓存时调用

# 为什么v-if 和 v-for 不建议同时使用一个标签？
    v-for优先级更高，会先遍历出dom再if消失，就相当于渲染了无意义的节点

# 不需要响应式的数据该怎么处理？
 freeze

# 父子组件执行顺序 

# 对象新增属性可以更新视图？删除属性可不可以更新视图？
  不能 vue2中删除属性不更新视图，$del删除
# arr[index]=xxx 会触发视图更新嘛？
 vue 中没有劫持数组，视图不更新

 # 修饰符
 - lazy 改变输入框的值时value不会改变，离开输入框时v-model才会改变
 - trim把首尾空格过滤掉
 - number 将值转换为数字，先数字再字母只显示数字，反之修饰符无效
 - stop 阻止冒泡
 - capture 从里往外冒泡，外网捕获
 - self 只有点击事件的本身才有作用
 - once 事件只执行一次
 - prevent 阻止默认事件，如a标签的跳转
 - native 加在自定义事件上，保证事件能执行
 - right left middle 鼠标左中右的按键触发事件
 - passive 监听元素滚动事件，会触发onscroll事件，移动端相当于整个.lazy修饰符
 - camel 加了就能识别
 - sync 当父组件传值进子组件，子组件想要改变这个值时，可以这么做
 <chidren :foo.sync="bar"></children> 父组件
 子组件 this.$emit('update:foo',newValue)

 - keyCode键盘的按键

