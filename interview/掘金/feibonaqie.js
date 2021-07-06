// F(0) = 0;
// F(1) = 1;
// F(n) = F(n - 1) + F(n - 2);

//公式版递归
function fib(n){
    if(n<0) throw new Error('输入的数字不能小于0');
    if(n<2) return n
    return fib(n-1)+fib(n-2)
}

//迭代: for循环
function fib2(n){
    if(n < 0) throw new Error('输入的数字不能小于0');
     let f0 = 0,
     f1 = 1,
     for(let i=1;i<n;i++){
     curFib=f0+f1
     f0=f1;
     f1=curFib
     }
     return curfib

}

//去除重复计算的递归版本
function fib3(n) {
    if(n < 0) throw new Error('输入的数字不能小于0');
    if (n < 2) return n;
    function _fib(n, a, b) {
      if (n === 0) return a;
      return _fib(n - 1, b, a + b);
    }
    return _fib(n, 0, 1);
  }



console.log(fib(4))