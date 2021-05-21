const Koa=require('koa')
const route=require('koa-route')
const app=new Koa()



const main=ctx=>{
        ctx.response.body='hello world'
}

const redirect=ctx=>{
    ctx.response.redirect('/')
    ctx.response.body='<a href="/">Index Page </a>'//跳到首页main界面
}
app.use(route.get('/',main))
app.use(route.get('/redirect',redirect))

app.listen (3001,()=>{
    console.log('服务器已经启动')
})