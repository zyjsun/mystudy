//原型链继承
function SuperType(){
    this.proerty=true
}

SuperType.prototype.getSuperValue=function(){
    return this.proerty;
}

function SubType(){
    this.subproerty=false
}
//继承,用SuperType类型的一个实例来重写SunbType类型的原型对象 原型链的继承
SubType.prototype=new SuperType()
SubType.prototype.getSubValue=function(){
    return this.subproerty
}

var instance=new SubType()
console.log(instance.getSuperValue())
//instance->subType的原型-->SuperType的原型-->Object的原型
