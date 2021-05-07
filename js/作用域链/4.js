var str='abcd'
str+=1
var test=typeof(str)
if(test.length==6){
    test.sign='typeof的返回值可能为String'

}
console.log(test.sign)