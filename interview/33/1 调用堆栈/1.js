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
// console.log(zjy('11011'));
// 已知一个奇怪的队列，这个队列中有n个数，初始状态时，顺序是1,2,3,4,…n，是1-n按顺序排列。
// 这个队列只支持一种操作，就是把队列中的第i号元素提前到队首(1<i<=n)，如有4个元素，初始为1，2，3，4,
// 可以将3提前到队首，得到3，1，2，4 。 
//  现在给出一个经过若干次操作之后的序列，请你找出这个序列至少是由原序列操作了多少次得到的。

function change (carr) {
  let arr = [...carr]
  let j = 0
  arr.sort((a, b) => a - b)
  console.log(arr, carr);
  for (let i = 0; i < arr.length; i++) {
    // arr.splice(arr.indexOf(carr[i]), 1)
    // console.log(arr);
    // arr.unshift(carr[i])
    // console.log(arr);
    let index = carr.indexOf(carr[i] - 1)
    // console.log(index);
    // console.log(index);
    let temp
    temp = carr[index]//1
    carr[index] = carr[i]//
    carr[i] = temp
    console.log(carr);
    // [carr[i], carr[index]] = [carr[index], carr[i]]
    j++
    if (arr.toString() == carr.toString()) {
      return j
    }
  }

}
a = [1, 2]
b = [1, 2]
console.log(change([3, 1, 2, 4]))
