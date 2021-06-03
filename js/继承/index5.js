function createPerson(origin){
    var clone=Object.create(origin)//执行了create
    clone.sayGood=function(){
        console.log('hello world')
    }
    return clone
}

var obj={name: 'bos'}
var per1=createPerson(obj)

per1.__proto__name='胡老板'
console.log(obj)