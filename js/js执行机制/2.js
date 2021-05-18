// var a=2
// function add(){
//     var b=10
//     return a+b
// }
// add()

function renStack(n){
    if(n==0) return 100
    return renStack(n-2)
}

renStack(50000)//栈溢出 深度一万多