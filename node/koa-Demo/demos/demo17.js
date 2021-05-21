const Koa=require('koa')

const app=new Koa()

const main=ctx=>{
    const n=Number(ctx.cookies.get('view')||0)+1
    ctx.cookies.set('view',n)
    ctx.response.body='view'+n//token
}



app.use(main)

app.listen (3001,()=>{
    console.log('服务器已经启动')
})