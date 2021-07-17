# VUE

vue3
响应原理：通过proxy对数据进行封装，当数据变化时，触发模板的内容更新
- readonly 该变量只是可读
- toRefs将一个解构出来不具备响应式的变量，变成响应式
- toRefs proxy({name: 'dell'}),{name : proxy({value: 'dell'})}
- toRef 当响应式数据中没有该属性值时，该方法可以让该数据中不存在的属性具备响应式
- context={attrs,slots,emit} attrs：父组件传递给子组件的props参数
                              slots: 父组件调用子组件传递slots内容
                              return ()=>h('div',{},slots.default)
                              子组件给父组件传值emit,emit(change)加方法名
- computed set改变该computed中的值时执行，get每次读取属性时执行
- watch 侦听器 具备一定的惰性lazy,参数可以拿到原始和当前值，一个可以侦听多个数据
              reactive数据 第一个值要写()=>nameObj.name,箭头函数
              第一个参数可以是个数组，监听的参数为多个时，第二个参数前面有几个数，他就写几个
              第三个参数为immediate，加了它为true时，于watchEffect效果一样。
- watcheEffect: 立即执行，没有惰性，immediate. 不需要传递你要侦听的内容，自动感知代码的依赖，
                不需要传递多个参数，只要传递一个回调函数不能获取之前数据的值
  # 生命周期函数
  onBeforeMount onMounted

  provide 向子组件提供数据 provide('name','dell')
          子组件接收在setup()中接收 inject('name')其中第二个参数为默认值
          多层的数据传递 
          父组件修改传递的值
  ref: 获取Dom结构，不是setup中的ref 获取真实的DOM结点
