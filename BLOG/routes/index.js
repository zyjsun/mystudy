const router = require('koa-router')()

module.exports = (app) => {
  router.get('/', require('./home').index)
  router.get('/signup', require('./user').singup)
  router.post('/signup', require('./user').singup)
  // router.get('/about', require('./about').index)
  router.get('/signin', require('./user').signin)
  router.post('/signin', require('./user').signin)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
