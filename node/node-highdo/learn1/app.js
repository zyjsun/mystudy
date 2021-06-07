// const Koa=require('koa')
// const route=require('koa-route')

// const app=new Koa()
// function main(ctx){
//     ctx.body='Hello world'
// }
// app.use(route.get('/hello',main))



const express=require('express')
const app=express()

app.get('/hello',function(req,res){
    res.send('Hello')
})


app.listen(3000,()=>{
    console.log('项目启动中');
})