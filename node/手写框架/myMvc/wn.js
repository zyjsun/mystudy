const Koa = require('koa')
const { initRouter, initController } = require('./wn-loader.js')

class wn {
  constructor(conf) {
    this.$app = new Koa()
    this.$ctrl = initController()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }
  start (port) {
    this.$app.listen(port, () => {
      console.log(`zyj服务启动成功 端口：${port}`);
    })
  }
}


module.exports = wn