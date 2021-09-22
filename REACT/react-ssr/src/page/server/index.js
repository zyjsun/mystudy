import { renderToString } from 'react-dom/server';
import express from 'express'
import Home from '../Home';
const app = new express()
const content = renderToString(<Home />)
qpp.get('/', (res, req) => {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ssr</title>
</head>
<body>
 <div id='root'>${content}</div>
</body>
</html>`
})

app.listen(3001, () => {
  console.log('端口已经启动');
})