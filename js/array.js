//数组方法
// constructor
/*  join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。   concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    pop()	删除并返回数组的最后一个元素
    push()	向数组的末尾添加一个或更多元素，并返回新的长度。
    reverse()	颠倒数组中元素的顺序。
    shift()	删除并返回数组的第一个元素
    slice()	从某个已有的数组返回选定的元素 start,end 默认结尾
    sort()	对数组的元素进行排序
    splice()	删除元素，并向数组添加新元素。
    toSource()	返回该对象的源代码。
    toString()	把数组转换为字符串，并返回结果。
    toLocaleString()	把数组转换为本地数组，并返回结果。
    unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
    valueOf()	返回数组对象的原始值
*/
//
//
//
//
var test=new Array();
var test2=true;
if(test.constructor==Array)
{
    console.log("this is a array")
}
if(test2.constructor==Boolean)
{
    console.log("this is a boolean")
}
if(test.constructor==Date)
{
    console.log("this is a DATE")
}
if(test.constructor==String)
{
    console.log("this is a string")
}
function employee(name,job,born)
{
this.name=name;
this.job=job;
this.born=born;
}
var bill=new employee("Bill Gates","Engineer",1985);
console.log(bill.constructor);
var a=[1,2,3]
var b=[4,5,6]
 a.concat(4,5);
 console.log(a);
//document.write(a.concat(4,5));
var c=a.concat(b);
console.log(c);


var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

var arr3=arr.concat(arr2);
arr3.push(a);//push
var c=arr3.pop();
arr3.reverse();
var d=arr3.slice(2);
console.log(arr3);
console.log(c);
console.log(d);