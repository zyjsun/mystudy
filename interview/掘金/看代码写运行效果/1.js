// 加了默认值，则转为严格模式（其实也可以使用 "use strict" 转），
// 这时候参数（a、b、c）与 arguments 没有绑定关系，
// 所以修改 arguments 不会影响到参数（a、b、c）的值，
// 修改参数（a、b、c）也不会影响到 arguments。
// 不加默认值，则为非严格模式，结果和上面的相反。


function side(arr) {
    arr[0] = arr[2];
  }
  function a(a, b, c=3) {// 加了默认值，则转为严格模式（其实也可以使用 "use strict" 转），
    c = 10;
    console.log(arguments)
    side(arguments);// 所以修改 arguments 不会影响到参数（a、b、c）的值，
    return a + b + c;
  }
  console.log(a(1, 1, 1));
  