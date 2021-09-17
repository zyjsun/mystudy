const Koa = require('koa')
const userRouter = require('./router/user')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');
const app = new Koa()
app.use(bodyParser())
app.use(cors())
app.use(userRouter.routes(), userRouter.allowedMethods())

app.listen(3001, () => console.log('服务已在3001端口启动'))