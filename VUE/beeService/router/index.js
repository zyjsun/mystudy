const router = require('koa-router')()
module.exports = (app) => {
  router.post('/login', require('./user').Login)
  router.post('/register', require('./user').register)
  router.post('/addNote', require('./addNote').add)
  app
    .use(router.routes())
    .use(router.allowedMethods())
}
