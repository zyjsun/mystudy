// 1）当 a 出现在 if 的条件中时，被转成布尔值，而 Boolean([0])为 true,所以就进行下一步判断 a == true,在进行比较时，[0]被转换成了 0，所以 0==true 为 false
// 数组从非 primitive 转为 primitive 的时候会先隐式调用 join 变成“0”，string 和 boolean 比较的时候，两个都先转为 number 类型再比较，最后就是 0==1 的比较了

var a = [1];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
// true
!![] //true 空数组转换为布尔值是 true,  
!![0]//true 数组转换为布尔值是 true  
[0] == true;//false 数组与布尔值比较时却变成了 false  
Number([])//0  
Number(false)//0  
Number(['1'])//1
// 2）所以当 a 出现在 if 的条件中时，被转成布尔值，而 Boolean([0])为 true,所以就进行下一步判断 a == true,在进行比较时，js 的规则是：
// ①如果比较的是原始类型的值，原始类型的值会转成数值再进行比较

1 == true  //true   1 === Number(true)
'true' == true //false Number('true')->NaN  Number(true)->1
'' = 0//true
'1' == true//true  Number('1')->1
// ②对象与原始类型值比较，对象会转换成原始类型的值再进行比较。
// ③undefined和null与其它类型进行比较时，结果都为false，他们相互比较时结果为true。