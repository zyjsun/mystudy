// var text='The sunset sets at twelve o’ clock.'
// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
// console.log(alphabetPosition(text))

var count=0
function test(){
    var num=0//同一个公共作用
    function a(){
        num++
        console.log(num);
    }
    return a
}
//如何保留住函数内部的某个变量
var result=test()
result()
result()
result()