var pragrammer={
    name:"程序员",
    pragramming:function(a1,a2,a3){
        console.log(`${this.name}编程`);
        console.log(`更多技能：${a1},${a2},${a3}`)
    }

}

var delivery={
    name:"外卖员",
    sendfood:function(){
        console.log(`${this.name}送餐`)
      
    }
}
//call和apply的作用都是改变this作用域，都是在特定作用域中调用函数。当一个对象没有某个方法，
//而其他对象有，我们就可以使用call或apply实现某个方法的复用。

// call和apply使用方法基本相同，唯一不同之处就是它们的参数规则：call方法接受一个参数列表，而apply方法接受一个包含多个参数的数组。
pragrammer.pragramming.call(delivery,'cook','guita','luntai')
pragrammer.pragramming.apply(delivery,['cook','guita','luntai'])

// 任何对象转为布尔值，都为得到 true（切记！在 JS 中，只有 0，-0，NaN，""，null，undefined 这六个值转布尔值时，结果为 false）。

