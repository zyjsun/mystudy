const router = require('koa-router')()
const jwt = require('../util/jwt')

router.post('/user/signin', async (ctx) => {
  // 拿到前端传过来的参数
  // koa解析不了post请求里面的东西


  //模拟数据库的检验
  if (1) {
    let user = ctx.request.body
    console.log(user);
    let jwtToken = jwt.sign({ id: '1024', username: user.username, admin: true })
    // ctx.success({ jwtToken })
    ctx.body = {
      Token: jwtToken,
      data: '成功',
      status: 200
    }

    // localStorage.setItem('jwtToken', jwtToken)
  } else {
    ctx.error('用户名或密码错误')
  }
  ctx.body = {
    data: 'hello'
  }
})

module.exports = router
