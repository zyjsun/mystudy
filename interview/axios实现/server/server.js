const express = require('express')
const app = new express()
//解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/getTest', function (req, res) {
  let data = {
    name: '张三',
    age: 18
  }
  res.json(data)
})

app.listen(5000, () => {
  console.log('服务已经启动')
})