const Koa=require('koa')
const app=new Koa()
const fs=require('fs')

const main=(ctx)=>{
    ctx.response.type='html',
    ctx.response.body=fs.createReadStream('./template.html')//创建读取文本流
}
app.use(main)
app.listen(3001)