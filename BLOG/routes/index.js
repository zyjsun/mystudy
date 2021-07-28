const router = require('koa-router')()
async function isLoginUser (ctx, next) {
  if (!ctx.session.user) {
    ctx.flash = { warning: '未登录，请先登录' }
    return ctx.redirect('/signin')
  }
  await next()
}
async function isAdmin (ctx, next) {
  if (!ctx.session.user) {
    ctx.flash = { warning: '未登录，请先登录' }
    return ctx.redirect('/signin')
  }
  if (!ctx.session.user.isAdmin) {
    ctx.flash = { warning: '没有权限' }
    return ctx.redirect('back')
  }
  await next()
}
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
  router.get('/posts/new', isAdmin, require('./post').create)
  router.post('/posts/new', isAdmin, require('./post').create)
  router.get('/posts/:id', require('./post').Show)
  router.post('/posts/:id/edit', require('./post').edit)

  router.get('/posts/:id/delete', require('./post').del)
  router.get('/posts/:id/edit', require('./post').edit)

  // 评论
  router.post('/comments/new', isLoginUser, require('./comments').create)
  router.get('/comments/:id/delete', isLoginUser, require('./comments').Delete)

  // 分类
  router.get('/category', isAdmin, require('./category').list)
  router.get('/category/new', isAdmin, require('./category').create)
  router.post('/category/new', isAdmin, require('./category').create)
  router.get('/category/:id/delete', isAdmin, require('./category').del)
  app
    .use(router.routes())
    .use(router.allowedMethods())

  app.use(async (ctx, next) => {
    await ctx.render('404', {
      title: 'not find'
    })
  })
}
