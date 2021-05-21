const Koa=require('koa')
const app=new Koa()
const fs=require('fs/promises')
// const fs=require('fs')
//异步中间件
const main= async function(ctx){
    ctx.response.type='html',
    ctx.response.body=await fs.readFile('./template.html','utf8')//先当于传入了字符串
    // ctx.response.body=await fs.readFileSync('./template.html','utf8') 异步读取
}

app.use(main)
app.listen(3001)
