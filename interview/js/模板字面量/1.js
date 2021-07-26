const name = 'zz', action = '点赞，收藏和投币'
const tag = (arr, ...placeholder) => {
  arr.reduce((pre, cur, i) => {
    pre + `<span class="addColor">${placeholder[i - 1]}</span>` + cur
  })
}

const result = tag`感谢关注${name},记得${action}`
console.log(result)

document.body.innerHTML = result