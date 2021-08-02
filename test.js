const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('ZJY ^-^')
})

server.listen(8080, () => {
  console.log('服务器运行中')
})