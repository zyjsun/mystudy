const Koa = require('koa')
const router = require('./router')
const mongoose = require('mongoose')
const CONFIG = require('./config/config')
mongoose.connect(CONFIG.mongodb)// 连接上mongodb
const session = require('koa-session')
const bodyparse = require('koa-bodyparser')

const app = new Koa()


app.use(bodyparse())
// 操作session会话
app.keys = ['somethings']
app.use(session({
  key: CONFIG.session.key,
  maxAge: CONFIG.session.maxAge
}, app))

app.use(async (ctx, next) => {
  ctx.state.ctx = ctx
  await next()
})
router(app)

app.listen(3000, () => {
  console.log('服务在3000端口已启动')
})
