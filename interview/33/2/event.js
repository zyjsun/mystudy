//const 实现
//const obj={}
// function _const (key, value) {
//   Object.defineProperty(this, key, {
//     value: value,//返回值
//     writable: false,
//     enumerable: true
//   })
// }
// _const('obj', { a: 1 })//obj={a:1}
//obj=123//error


let arr = [[1, 2, 3], [1, 2, [2, 3, 4]]]
let result = []
function flat (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// let str = JSON.stringify(ary);
// str = str.replace(/(\[|\])/g , '')
// str = '[' + str + ']'
// console.log(JSON.parse(str));

// function flat (ary) {
//   while (ary.some(Array.isArray)) {
//     ary = [].concat(...ary)
//   }
//   return ary
// }
// console.log(flat(arr));

// 我手中有一堆扑克牌， 但是观众不知道它的顺序。
// 第一步， 我从牌顶拿出一张牌， 放到桌子上。
// 第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。  (过程反过来)
// 第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。
// 最后， 观众可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）
// 请问， 我刚开始拿在手里的牌的顺序是什么？
// 请编程实现。

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function getCardsOrder (input, cards) {
  // 把手上最下面一张牌放到最上面
  if (cards.length) {
    let popCard = cards.pop()
    cards.unshift(popCard)
  }
  // 把桌上的牌往回收
  let popItem = input.pop()
  cards.unshift(popItem)

  if (input.length == 0) {
    return cards
  } else {
    return getCardsOrder(input, cards)
  }
}
console.log(getCardsOrder(input, []));