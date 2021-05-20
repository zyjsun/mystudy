const Koa=require('koa')
const app=new Koa()
const route=require('koa-route')

const main=(ctx)=>{
//    console.log(ctx.request.path)
    ctx.response.body='首页'

}

const about=ctx=>{
    ctx.response.body='关于'
}

app.use(route.get('/about',about))//其他页
app.use(route.get('/',main))
// app.use(main)

app.listen(3001)
