
//变量提升，函数声明

showName()
console.log(myname)

var myname='龙哥'
function showName(){
    console.log('函数showName被执行');
}//函数引用类型,在堆里面

//函数showName被执行
//undefined

// var showName=function(){
//     console.log(2);
// }

// function showName(){
//     console.log(1);
// }

//1