const router = require('koa-router')()
module.exports = (app) => {
  router.post('/login', require('./user').Login)
  router.post('/register', require('./user').register)
  router.post('/addNote', require('./addNote').add)
  router.get('/showNote', require('./addNote').show)
  router.post('/userInfo', require('./user').show)
  router.post('/updateInfo', require('./user').updateUser)
  router.post('/goods', require('./addNote').goods)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
