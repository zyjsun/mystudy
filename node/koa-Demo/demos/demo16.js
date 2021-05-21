const Koa=require('koa')

const app=new Koa()


const main=ctx=>{
        ctx.throw(500)
}

//注册错误监听机制
app.on('error',(error,ctx)=>{
    console.error('server error',error)
})

app.use(main)

app.listen (3001,()=>{
    console.log('服务器已经启动')
})