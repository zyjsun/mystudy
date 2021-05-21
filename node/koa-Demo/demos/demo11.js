const Koa=require('koa')
const path=require('path')
const app=new Koa()

const serve=require('koa-static')

const main=serve(path.join(__dirname))//绝对路径

console.log(__dirname)

app.use(main)
app.listen (3001,()=>{
    console.log('服务器已经启动')
})