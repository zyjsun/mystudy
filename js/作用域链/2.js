let mr={
    name:'laochen',
    age:20,
    sex:'boy',
    drink: function(){
        console.log('i am drink')
        this.health++
    },
    somke:function(){
        console.log('I am smoking!cool!');
        mr.health--

    },
    health:100,
    boyFriend:'saff'
}
function myPerson(name,height){
    var that={}
    his.name=name
    this.height=height
    return that
}
var person1=myPerson('12','132')
var person2=myPerson('13','132')
function Student(name,age,sex){
    this.name=name
    this.age=age
    this.sex=sex
    this.grade=2018
    return {}//返回对象
}
var student=new Student('pg',20,'boy')
//1.帮函数内部创建THIS对象 2.赋值 3. return this


// mr.health++
// console.log(mr.health)
mr.boyFriend='peng'
console.log(mr)
mr.sex='man'

delete mr.sex
console.log(mr)
//当访问一个不存在的变量会报错，当访问一个对象不存在的属性就为 undefined???