function test(){

}
// test.name=''
// test.prototype

//test.[[scope]]

// test() -->AO:{}//回收
function a()
{
    function b(){
        var b=222
    }
    var a=111
    b()
    console.log(a)
}
var glob=100
a()

//a 定义 a.[[scope]] ----> 0:GO{}
// a 执行 a.[[scope]]---->0:AO{} 1:GO{}


function a()
{
    function b(){
        function c(){

        }
        c()
    }
    b()
}
a()