const Koa=require('koa')

const app=new Koa()

const route=require('koa-route')

const main=ctx=>{
    ctx.response.body='hello world'
}

const a=ctx=>{
    ctx.response.body='a 页面'
}

const b=ctx=>{
    ctx.response.body='b 页面'
}

const logger=(ctx,next)=>{//中间件
   
    console.log(`${Date.now()}  ${ctx.request.method} ${ctx.request.url}`)
    next()//开通第二个功能
}

// app.use(route.get('/', main))

// app.use(route.get('/a',a))

// app.use(route.get('/b' ,b))

app.use(logger)
app.use(main)
app.listen (3001,()=>{
    console.log('服务器已经启动')
})