const Koa = require('koa')
const path = require('path')
const router = require('./routes')
const views = require('koa-views')// 处理模板引擎
const serve = require('koa-static')// 处理静态资源
const mongoose = require('mongoose')
const CONFIG = require('./config/config')
mongoose.connect(CONFIG.mongodb)// 连接上mongodb

const app = new Koa()

app.use(views(path.join(__dirname, 'views'), {
  map: { html: 'nunjucks' }
}))

app.use(serve(
  path.join(__dirname, 'public')
))// 请求静态资源
router(app)

app.listen(3000, () => {
  console.log('服务在3000端口已启动')
})
