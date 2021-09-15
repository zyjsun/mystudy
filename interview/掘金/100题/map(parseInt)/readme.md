第 2 题：['1', '2', '3'].map(parseInt) what & why ?

首先让我们回顾一下，map函数的第一个参数callback：
var new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[, thisArg])
这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。
# map里有一个回调，其中回调有三个参数为（当前值+索引值）

# 而parseInt则是用来解析字符串的，使字符串成为指定基数的整数。
parseInt(string, radix)
接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。

了解这两个函数后，我们可以模拟一下运行情况

parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
parseInt('2', 1) //
parseInt('3', 2) //基数为2（2进制）表基数为1（1进制）表示的数中，radix最大值小于2，所以无法解析，返回NaN示的数中，最大值小于3，所以无法解析，返回NaN
# 如果该参数radix小于 2 或者大于 36，则 parseInt() 将返回 NaN。



