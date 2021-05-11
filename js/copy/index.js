function foo(){
    var a=1
    var b=a//number 原始类型
    a=2
    console.log(a)//2
    console.log(b)//1  深拷贝
}
foo()
function bar(){
    var c={name:'zz'}//对象 引用类型 浅拷贝
    var d=c
    c.name="yy"
    console.log(c)
    console.log(d)
}
bar()