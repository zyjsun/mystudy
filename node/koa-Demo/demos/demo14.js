const Koa=require('koa')

const app=new Koa()



const main=ctx=>{
        ctx.response.status=404
        ctx.response.body='page not find'
}
app.use(main)


app.listen (3001,()=>{
    console.log('服务器已经启动')
})