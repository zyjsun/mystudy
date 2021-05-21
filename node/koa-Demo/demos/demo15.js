const Koa=require('koa')

const app=new Koa()

const handle=async(ctx,next)=>{
    try{
        await next()
    }catch(error){
      ctx.response.status=error.statusCode|error.status|500;//捕获错误的信息与状态码
      ctx.response.body={
        message: error.message
      }
    }
}

const main=ctx=>{
        ctx.throw(500)
}

app.use(handle)
app.use(main)

app.listen (3001,()=>{
    console.log('服务器已经启动')
})