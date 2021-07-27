const router = require('koa-router')()

module.exports = (app) => {
  // router.get('/', require('./home').index)
  router.get('/signup', require('./user').signup)
  router.post('/signup', require('./user').signup)
  // router.get('/about', require('./about').index)
  router.get('/signin', require('./user').signin)
  router.post('/signin', require('./user').signin)
  router.get('/signout', require('./user').signout)

  // 文章相关的接口

  router.get('/', require('./post').index)
  router.get('/posts', require('./post').index)
  router.get('/posts/new', require('./post').create)
  router.post('/posts/new', require('./post').create)
  router.get('/posts/:id', require('./post').Show)

  // 文章

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
