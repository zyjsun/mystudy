因为各种javascript的数据类型最后都会在初始化之后放在不同的内存中，因此上面的数据类型大致可分为两类：

原始数据类型：基础类型存储在栈内存中，被引用或者拷贝时，会创建一个完全相等的变量；占据空间小，大小固定，属于被频繁使用的数据，所以放在栈中存储。
引用数据类型：引用数据类型存储在堆内存中，存储的是地址，多个引用指向同一个地址，这里会设计一个‘共享’的概念，占据空间大，大小不固定。引用类型在栈中存储了指针，该指针指向堆中该实体的起始位置。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

# Symbol
  1. Symbol函数接受一个可选参数，方便代码阅读和后期调试
  2. 用Object.getOwnPropertyNames(),Object.keys()或者for...in等方法无法显示Symbol属性名
  3. Object.getOwnPropertySymbols方法返回包含所有Symbol属性的数组
  4. Symbol函数不能使用new,因为是原始值
  5. Symbol。for函数创建共享Symbol,如果已经存在，直接返回已有的Symbol
  6. Symbol函数创建的原始值是唯一的
  7. Symbol.keyFor()返回登记Symbol有关的键

# typeof
  对原始类型来说，除了null都可以显示正确。
  typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型,
  所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof
# instance
  正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

  instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
  而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断.
# constructor
  如果我创建一个对象，更改它的原型，constructor就会变得不可靠了

# Object.prototype.toString.call()
  toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]；而对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息

# 总结
- typeof

直接在计算机底层基于数据类型的值（二进制）进行检测
typeof null为object 原因是对象存在在计算机中，都是以000开始的二进制存储，所以检测出来的结果是对象
typeof 普通对象/数组对象/正则对象/日期对象 都是object
typeof NaN === 'number'

- instanceof

检测当前实例是否属于这个类的
底层机制：只要当前类出现在实例的原型上，结果都是true
不能检测基本数据类型

- constructor

支持基本类型
constructor可以随便改，也不准

- Object.prototype.toString.call([val])

返回当前实例所属类信息

# javascript的作用域和作用域链
- 作用域： 作用域是定义变量的区域，它有一套访问变量的规则，
这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。
- 作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和 函数。本质上是一个指向变量对象的指针列表

# javascript创建对象的几种方式

- 1.工厂模式，用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

- 2.构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过 
# 原型来识别对象的类型。
但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，
# 浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

（3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了
# 函数对象的复用问题。
但是这种模式也存在一些问题，
# 一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，
# 通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。
这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（5）第五种模式是动态原型模式，这一种模式
# 将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

#  值类型与引用类型
- 值类型 
1. 占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。）

2. 保存与复制的是值本身

3. 使用typeof检测数据的类型

4. 基本类型数据是值类型

- 引用类型
1. 占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）

2. 保存与复制的是指向对象的一个指针

3. 使用instanceof检测数据类型

4. 使用new()方法构造出的对象是引用型




践，每当我在函数内部看到 this 关键字时，这些就是我为了判断它的引用而采取的步骤。

查看函数在哪被调用。
点左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
JavaScript 很奇怪，“this” 会指向 “window” 对象。








