//拉齐有一个01序列，他可以对这个序列进行任意多次变换，每次变换都是把序列的最后若干个元素放到最前面，
// 例如：010011，
// 将最后3个元素011放到最前面，序列变为011010。所有变换结束后，拉齐需要挑出一个全为1的连续区间，要求最大化区间长度。
function zjy (str) {
  if (!str.includes(0)) {
    return str.length
  } else {
    str = str + str
    console.log(str.split(0));
    const arr = str.split(0).map(e => e.length)
    return Math.max(...arr)
  }

}
console.log(zjy('11011'));

