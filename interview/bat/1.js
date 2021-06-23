//0.1+0.2===0.3嘛?为什么?

// IEEE 754 64位表示数字 因为浮点数运算的精度问题

//0.1
//0.000110011
//0.2
//0.001100110011
//因为浮点数运算的精度问题
//先转换成2进制(转换成无限循环小数IEEE754尾数为52)
//解决
// 好的方法是设置一个误差范围值，通常称为”机器精度“，而对于Javascript来说，这个值通常是2^-52,而在ES6中，已经为我们提供了这样一个

// 属性：Number.EPSILON，而这个值正等于2^-52。这个值非常非常小，在底层计算机已经帮我们运算好，并且无限接近0，但不等于0,。这个时候我们只要判断(0.1+0.2)-0.3小于

// Number.EPSILON，在这个误差的范围内就可以判定0.1+0.2===0.3为true。
function numbersequal(a,b){ 
    return Math.abs(a-b)<Number.EPSILON;
  }
//接下来再判断   
    var a=0.1+0.2, b=0.3;
  console.log(numbersequal(a,b)); //这里就为true了

  //怎末解决精度丢失的问题
  function add(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
   }
   
