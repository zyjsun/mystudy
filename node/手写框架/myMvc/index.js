// const Koa = require('koa')
// const router = require('koa-router')

// const app = new Koa()

// app.use(router)
// app, listen(3000)
// const { initRouter } = require('./wn-loader')
// const app = new (require('koa'))()

// app.use(initRouter().routes())//使用路由所有的东西

// app.listen(3000)


const wn = require('./wn')
const app = new wn()
app.start(3000)