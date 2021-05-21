const Koa=require('koa')
const app=new Koa()

//前端向我发送的请求里面的method和url 我要显示在前端页面上
const main=ctx=>{
    ctx.response.body=`${ctx.request.method}---${ctx.request.url}`
    }

app.use(main)
app.listen(3001)