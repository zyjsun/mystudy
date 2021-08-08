let http = require('http')
let EventEmitter = require('events')
const context = require('./context');
const request = require('./request');
const response = require('./response')
class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }

  use (fn) {
    this.fn = fn
  }

  createContext (req, res) {//核心，创建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = context.response = Object.create(this.response);
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.response = response
    response.request = request
    return ctx
  }
  handleRequest (req, res) {//自己req与res有效  创建一个处理请求的函数
    let ctx = this.createContext(req, res)//创建ctx
    this.fn(ctx)//接收一个实参 调用用户给的回调，把ctx给到用户使用
    res.end(ctx.body)//ctx.body用来输出页面
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))//this为listen的this
    server.listen(...args)
  }

}

module.exports = Koa