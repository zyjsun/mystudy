// let http=require('http')

// let server=http.createServer()

// server.on('request',(req,res)=>{//请求
// console.log('浏览器正在朝我发请求');
// res.write('hello')
// res.end('520')
// })



// server.listen(3000,()=>{
//     console.log('服务器已经启动');
// }) 
// 原生的node

const Koa=require('koa')

const app=new Koa()

app.use((ctx)=>{
    ctx.body='去过520'
})
app.listen(3000,()=>{
    console.log('项目启动中');
})