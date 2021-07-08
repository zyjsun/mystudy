// Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
// 而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
var min = Math.min();
max = Math.max();
console.log(min < max);
