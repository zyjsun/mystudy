# js原始类型? null是对象吗？
 Number  String Boolean undefine null Symbol

# 对象类型与原始类型的不同之处？函数参数是对象会发生什么问题?
    原始类型存储的是值，存在栈当中。对象类型存储的是地址（指针），地址是存在栈当中，而值是存在堆当中。

    当函数内部去修改该对象的某个属性时，该对象的属性也会被修改

# typeof vs instanceof
问typeof是否可以正确判断类型？
    不能，tyoeof只能判断null之外的原始类型,和function
    - 实例化的对象的显示原型_proto_，等于对象的prototype
instanceof能正确判断对象的原理是什么?
    因为instanceof会从对象的_proto_这个属性去判断该对象是否属于某个类型（构造函数）

# 类型转换
1. 转为布尔值
2. 转为数字
3. 转为字符串

  -对象转原始值---调用内置[[ToPrimitive]]函数
    1. 如果为原始类型，那就不需要转换
    2. 调用 x.valueOf(),如果转换为基础类型，就返回转换的值
    3. 调用x.toString(),如果转换为基础类型，就返回转换的值
    4. 如果没有转换成原始类型，就会报错

- 四则运算
   1. 运算当中其中一方是字符串，那么另一方也会转换成字符串进行运算
   2.  如果一方不是字符串或者数字，那么它将转换成字符串或数字
   3. 除了加法运算外，只要其中一方是数字，那么另一方就会被转为数字

#  == vs ===
    if (x == y) {
   console.log(true);
 }
 1. x y 类型是否相等，相等就比较大小
 2. 类型不相等，就进行类型转换
 3. 会先判断是都在对比 null 和 undefined，是的话返回true
 4. 判断是都在对比 string 和 number，是的话就会将字符串转换为number
 5. 如果有一方为boolean，就会把布尔转为number对比
 6. 如果有一方为object且另一方为string，number，或者symbol，就会把object转为原始类型进行判断

 []==![] true !转换为布尔值
 ''==false
 ''==0
 0==0
 true

- 非箭头函数： 谁调用我，我的this就指向谁，独立调用情况this指向window。
- 箭头函数： this代表的是该函数的词法作用域指向的this（函数定义的位置）


        