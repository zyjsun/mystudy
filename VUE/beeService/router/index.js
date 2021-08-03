const router = require('koa-router')()
module.exports = (app) => {
  router.get('/login', require('./user').Login)
  router.get('/register', require('./user').register)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
