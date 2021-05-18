function test(){
 var a=1
}
if(1){

}

for(let i=0;i<100;i++){
    
}//可以拿到里面的i值，但是个块级代码

while(1){}

let a=1
{
    a:1
}

function foo(){
    var a=1
    let b=2
    {
        let b=3;
        var c=4;
        let d=5;
        console.log(a)//1
        console.log(b)//块中开始不会去，执行时放在词法环境中的块中//3
    }
    console.log(b)//2
    console.log(c)//4
    // console.log(d)//报错
}

foo()