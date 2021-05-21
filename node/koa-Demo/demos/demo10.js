const Koa=require('koa')
const compose=require('koa-compose')//加在一块
const app=new Koa()

const route=require('koa-route')

const main=ctx=>{
    ctx.response.body='hello world'
}


const logger=(ctx,next)=>{//中间件
   
    console.log(`${Date.now()}  ${ctx.request.method} ${ctx.request.url}`)
    next()//开通第二个功能
}

const middlewares=compose([logger,main])
app.use(middlewares)

app.listen (3001,()=>{
    console.log('服务器已经启动')
})