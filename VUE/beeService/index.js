const koa = require("koa");
const Router = require("./router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
// 本地require
const session = require('koa-session')
const CONFIG = require("./config/config");
const app = new koa();
// app.use(async (ctx, next)=> {
//   ctx.set('Access-Control-Allow-Origin', "http://localhost:8080"); // 允许那个网站请求
//   ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, accept, origin, Content-Type,XMLHttpRequest,application/json');
//   ctx.set('Access-Control-Allow-Methods', 'POST , GET');
//   ctx.set('Access-Control-Allow-Credentials', true);
//   await next();
// });
app.use(cors());

// 操作session会话
app.keys = ['somethings']  // 
app.use(session({
  key: CONFIG.session.key,
  maxAge: CONFIG.session.maxAge
}, app))

app.use(bodyParser());
mongoose.connect(CONFIG.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Router(app);

app.listen(3000, (res, req) => {
  console.log("服务器在3000端口启动!");
});
