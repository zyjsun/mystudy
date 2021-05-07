//Person。prototype --原型
//函数被定义出来天生就具备 prototype属性 Person.prototype={}

var person=new Person()
function Person(){

}
Person.prototype.name='zz'
Person.prototype.say=function(){
    console.log('zzzuuuu')
}
person.say()
console.log(person.name)