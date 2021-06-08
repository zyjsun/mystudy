# Set
1. 不允许存在重复的值
2. 增add 删set.delete 查has 大小size
3. 可以直接被Array.from 转换成数组
4. set.keys()返回带有迭代器的键名集合(数组)
    set.value()返回带有迭代器的键值集合(数组)
    set.entries()返回带有迭代器的键值对集合(数组)

# WeakSet
1. WeakSet成员只能是对象，不能是其他类型
2. 是弱引用，就被垃圾回收机制无视，从而造成不被销毁
3. 没有size属性,所有成员不能被遍历

# Map
