const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
// 读取目录和文件
function load (dir, cb) {
  //获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach(filename => {
    // index.js 去除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)//对象
    cb(filename, file)
  })
}

// 加载路由
function initRouter (app) {
  const router = new Router()
  load('router', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ') //['get','/']
      console.log(`正在映射地址： ${method.toLocaleUpperCase()} ${prefix}${path}`);
      // app.get('/',ctx => {}
      //注册路由
      router[method](prefix + path, routes[key])
      console.log('router: ' + filename);
    })
  })
  return router
}

//初始化控制层
function initController () {
  const controllers = {}
  load('controller', (filename, controller) => {
    controllers[filename] = controller
  })
  return controllers
}
// initRouter()

module.exports = {
  initRouter,
  initController
}
