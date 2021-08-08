const koa = require('./lib/application')
const app = new koa()
app.use((ctx, next) => {
  ctx.body = 'Hello body'
  console.log(ctx.request.req.url)
  console.log(ctx.req.url)
})

app.listen(3000, () => {
  console.log('服务已启动')
})

// let http = require('http')
// let server = http.createServer((req, res) => {
//   res.end('hello word')
// })

// server.listen(4000)
