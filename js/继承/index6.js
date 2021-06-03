function SuperType(name){
    this.name=name
    this.colors=['red','green','blue']
}

//创建超类原型的一个副本
var anotherPrototype=Object.create(SuperType.prototype)
anotherPrototype.constructor=subType

subType.prototype=anotherPrototype
SuperType.prototype.sayName=function(){
    console.log(this.name);
}

function subType(name,age){ 
    SuperType.call(this,name)
    this.age=age
}

subType.prototype.sayAge=function(){
    console.log(this.age);
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