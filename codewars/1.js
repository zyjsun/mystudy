//字符串处理
//如果字符串超过140字，返回false .length? len()
// - 如果是空字符，返回false
// - 以#开头
// - 每一个单词首字母大写
// hello world
// #  Hello  World

/** 
 * @author zz
 * @date 2021-4-16
 * @param{string} str
 * @func 格式化字符串，返回#开始的大写单词
 * @return {string}
 * 
*/
function generateHashTagWithCapitalWords (str) {
  // return str.length>140||str==''?false:'#'+str;
  if (str.length > 140 || str == '') {
    return false;
  } else {
    var words = str.split(' ');//转换成数组 根据空格切割
    console.log(words);
    //对每个单词都去大写化
    //1.forEach 支持遍历每个元素 执行一个callback
    //  words= words.forEach(word => word.charAt(0).toUpperCase()+word.slice(1))
    //  console.log(words)
    //2.map 也有同上功能，但它能返回一个新数组 一个旧数组到一个新数组的过程
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    console.log(words);

    //输出undefined 无返回值 执行一遍
    return '#' + words.join(' ')
  }
}
function generateHashTagWithCapitalWordss (str) {
  return str.length > 140 || str == '' ? false : '#' + str.split(' ').map(capitalize).join(' ')
}
function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(generateHashTagWithCapitalWords('hello world'))
console.log(generateHashTagWithCapitalWordss('hello world'))


const maximalSquare = (matrix) => {
  if (!matrix.length) return 0

  let maxsqlen = 0
  let rowLength = matrix.length, colLength = matrix[0].length
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === '1') {
        matrix[row][col] = Number(matrix[row][col])
        if (row != 0 && col != 0) {
          matrix[row][col] = Math.min(matrix[row - 1][col], matrix[row - 1][col - 1], matrix[row][col - 1]) + 1
        }
        maxsqlen = Math.max(maxsqlen, matrix[row][col])
      }
    }
  }
  return maxsqlen ** 2

}

/** DP 
 * 题目要求最大正方形面积，面积 = 边长 * 边长，也就是求最大正方形的边长
 * 所以也就变成了，在矩阵中找最大正方形，矩阵中只有0｜1两种值，全部为1的才是正方形
 * 如何知道矩阵中哪里是1，哪里是0，只能穷举，但要聪明的穷举，这不就是动态规划的本质嘛！
 * 动态规划第一步，先假象我们创建了一个二维数组dp，用来存储「这个点为右下角的最大正方形的边长」
 * 下面开始找 状态转换方程
 * 思路：假设有如下矩阵
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 1
 * 随便找一个点，直观地，我们先找最右下角的点，设该点的最大正方形边长为 dp[i][j], 我们用肉眼看一下，dp[i][j] 应该等于 2
 * 为什么等于2，是因为我们看了 dp[i-1][j], dp[i-1][j-1], dp[i][j-1] 这三个点都为1，而又因为dp[i][j-2] 为0，所以
 * 我们知道dp[i][j]最大就为2了。也就是我们不能只看dp[i][j]相邻的三个点，而应该看「这三个相邻点为正方形右下角」的边长情况，
 * 取最小边长进行求解 dp[i][j] 的最大正方形边长。（看，我们找到了重叠子问题和最优子结构）
 * 所以，状态转换方程为：dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1
 * 下一步，需要根据矩阵数据，进行选择和明确 base case 即可
 */

matrix = [["1", "0", "1", "0", "0"],
["1", "0", "1", "1", "1"],
["1", "1", "1", "1", "1"],
["1", "0", "1", "1", "1"]]


