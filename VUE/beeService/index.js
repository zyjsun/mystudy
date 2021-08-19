const koa = require("koa");
const Router = require("./router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
// 本地require
// const session = require('koa-session')
const CONFIG = require("./config/config");
const app = new koa();
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
app.use(cors());

// 操作session会话
app.keys = ['somethings']  // 
// app.use(session({
//   key: CONFIG.session.key,
//   maxAge: CONFIG.session.maxAge
// }, app))

app.use(bodyParser());
mongoose.connect(CONFIG.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Router(app);

app.listen(3001, (res, req) => {
  console.log("服务器在3001端口启动!");
});
