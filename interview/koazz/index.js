const koa = require('./lib/application')
const app = new koa()
// app.use((ctx, next) => {
//   console.log(ctx.request.req.url)
//   console.log(ctx.req.url)
//   console.log(ctx.request.url)
//   console.log(ctx.request.path)
//   console.log(ctx.url)
//   console.log(ctx.path)
//   ctx.body = {
//     msg: 'hello'
//   }
// })
app.use((ctx, next) => {
  console.log(1);
  next()
  console.log(2);
})
app.use((ctx, next) => {
  console.log(3);
  next()
  console.log(4);
})
app.use((ctx, next) => {
  console.log(5);
  next()
  console.log(6);
})

app.listen(3000, () => {
  console.log('服务已启动')
})

// let http = require('http')
// let server = http.createServer((req, res) => {
//   res.end('hello word')
// })

// server.listen(4000)
