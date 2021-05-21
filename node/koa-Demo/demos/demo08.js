const Koa = require('koa');
const app = new Koa();
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});




// app.use((ctx,next)=>{  //洋葱模型  中间件的执行顺序
//     console.log(1);
//     next()
//     console.log(2)
// })

// app.use((ctx,next)=>{
//     console.log(3);
//     next()
//     console.log(4)
// })

// app.use((ctx,next)=>{
//     console.log(5);
//     next()
//     console.log(6)
// })

app.listen(3001);