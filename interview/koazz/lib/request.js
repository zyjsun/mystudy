// let URL = require('url')

let request = {
  get url () {
    return this.req.url //request.req.url
  },
  get path () {
    return new URL('http://localhost:3000/' + this.req.url).pathname//截取路径中的地址
  },
  get query () {
    return new URL('http://localhost:3000/' + this.req.url).query//获取前端传来的参数
  }
  //默认就有URL
}
module.exports = request