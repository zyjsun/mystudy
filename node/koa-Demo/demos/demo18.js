const Koa=require('koa')
const KoaBody=require('koa-body')
const app=new Koa()
const cors=require('@koa/cors')

const main=ctx=>{
    const body=ctx.request.body
    if(!body.name){
        ctx.throw(400)
    }
    ctx.response.body={name:body.name}//优化写key值
}

app.use(cors)
app.use(KoaBody())//报错合理
app.use(main)

app.listen (3001,()=>{
    console.log('服务器已经启动')
})