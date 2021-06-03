function SuperType(name){
    this.name=name
    this.colors=['red','green','blue']
}
SuperType.prototype.sayName=function(){
    console.log(this.name)
}

function SubType(name,age){
    this.age=age
    SuperType.call(this,name)//不改变父类属性值
}
 SubType.prototype=new SuperType()//属性共享 继承超类原型对象

SubType.prototype.sayAge=function(){
    console.log(this.age)
}



var instance1=new SubType('恺恺',18)

instance1.colors.push('pink')

instance1.sayName()//恺恺

instance1.sayAge()//18
console.log(instance1.colors)

var instance2=new SubType('欧文',20)
console.log(instance2.colors);
instance2.sayAge()
instance2.sayName()
