function object(o){
    function F(){}
    F.prototype=o
    return new F()
}

var obj={name:'zz'}

let res=object(obj)
// res.name='龙三元'//增加一个值
res.__proto__.name='龙三元'
console.log(obj);//龙三元 浅拷贝

var person={
    name: '金总',
    color: ['green','red','blue']
}
//Object.creat 继承 对象 null 无对象原型
var anotherPerson1=Object.create(person,{
    name:{
        value:'栋梁'
    }
})
var anotherPerson2=Object.create(person)
anotherPerson1.color.push('yellow')
console.log(anotherPerson1.color)
console.log(anotherPerson1.name)
console.log(anotherPerson2.color)