const express = require('express')
const app = new express()
qpp.get('/', (res, req) => {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>hello</h1>
  <p>world</p>
</body>
</html>`
})

app.listen(3001, () => {
  console.log('端口已经启动');
})