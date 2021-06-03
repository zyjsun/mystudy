//经典继承 ==构造函数继承
function SuperType(){
    this.colors=['red','green','blue']
}
SuperType.prototype.name="康师傅"

function SubType(color){
        SuperType.call(this,color)//Subtype中的this
}

var instance =new SubType()
instance.colors.push('pink')//['red','green','blue','pink']
console.log(instance.colors)

var instance2=new SubType('yellow')
console.log(instance2.colors);