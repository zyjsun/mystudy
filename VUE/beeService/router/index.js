const router = require('koa-router')()
module.exports = (app) => {
  router.post('/login', require('./user').Login)
  router.post('/register', require('./user').register)
  router.post('/addNote', require('./addNote').add)
  router.post('/delNote', require('./addNote').del)
  router.get('/showNote', require('./addNote').show)
  router.post('/userInfo', require('./user').show)
  router.post('/updateInfo', require('./user').updateUser)
  router.post('/goods', require('./addNote').goods)
  router.get('/getGoodImg', require('./goodImg').getGoodImg)
  router.post('/sendGoodImg', require('./goodImg').sendGoodImg)
  router.post('/postLoveContext', require('./Lovetext').postLoveContext)
  router.post('/getLoveContext', require('./Lovetext').getLoveContext)
  router.post('/delLoveContent', require('./Lovetext').delLoveContent)
  app
    .use(router.routes())
    .use(router.allowedMethods())
}
