1. Vuex本质上是一个对象
2. Vuex对象具备两个属性,一个是Store类,一个是install方法
3. install方法的作用是将store实例挂载到所有组件
4. Store这个类commit,dispatch

5. 插件如果是一个对象,那它必须具备install方法,当插件被use之后,
install方法会将Vue作为参数传入 (这就是use的功劳)

- 插件的类型,可以是install函数,也可以是具备install函数对象
- 插件只能被安装一次,需要保证插件列表中不能有重复的插件

