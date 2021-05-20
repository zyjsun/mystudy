const Koa=require('koa')
const Cors=require('@koa/cors')
const app=new Koa()
app.use(Cors())
const main=ctx=>{
  if(ctx.request.accepts('xml')){
      ctx.response.type='xml'
      ctx.response.body='<data>Hello World</data>'
  }else if(ctx.request.accepts('html')){
    ctx.response.type='html'
    ctx.response.body='<p>Hello World</p>'
  }else if(ctx.request.accepts('json')){
    ctx.response.type='json'
    ctx.response.body='<data:Hello,World>'
  }else{
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
}
}

app.use(main)

app.listen(3000)