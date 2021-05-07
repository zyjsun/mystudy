// var x=1

// function f(x=x){
//     //let x=x
//     console.log(x)
// }
// f()

// let test=()=>123//箭头函数，默认加上return
// let test=function(){
//     return 123
// }

// let foo='outer'

// function bar(func=()=>foo){ //外层寻找
//     let foo='inner'
//     console.log(func());
// }
// bar()

// var x=1
// function foo(x,y=function(){x=2}){// let x=2; let y
//     var x=3
//     y()
//     console.log(x);
// }
// foo()


//rest
// function add(...values){
//     let sum=0
//     for(let val of values){//遍历数组，不取下标
//          sum+=val
//     }
//     // console.log(arguments)//类数组
//     console.log(values);
//     return sum
// }
// console.log(add(1,2,3))

//箭头函数
var f=v=>v

var f=function v(){
    return v
}

[1,2,3].map(function(x){
    return x*x
})

[1,2,3].map(x=>x*x)

//箭头函数内的this对象，就是定义时所在的对象，而不是使用所在的对象

// var x=123//let 不行 声明提升
// function foo(){
//     console.log(this.x)
// }
// foo()

// var a=111
// var obj={
//     a:123,
//     foo:()=>{
//         console.log(this.a)
//     }
// }
// var bar=obj.foo
// bar()


var obj={
    birth:2000,
    getAge:function(){
        var b=this.birth
        let that=this
        var fn=function(){//箭头函数
            return new Date().getFullYear-that.birth//指向undefined
        }
        return fn
    }
}
console.log(obj.getAge())


