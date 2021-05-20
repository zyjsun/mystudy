const Koa=require('koa')
const app=new Koa()

const main=(ctx)=>{
//    console.log(ctx.request.path)
if(ctx.request.path!=='/'){
    ctx.response.type='html'
    ctx.response.body='<a href="/">index page</a>'
}else{
   ctx.response.body='Hello world'
}
}
app.use(main)
app.listen(3001)