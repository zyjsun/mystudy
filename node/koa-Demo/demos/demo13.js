const Koa=require('koa')
const app=new Koa()

const main=ctx=>{
      throw(500)
}


app.use(main)


app.listen (3001,()=>{
    console.log('服务器已经启动')
})