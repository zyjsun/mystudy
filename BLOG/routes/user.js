const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
module.exports = {
  // 注册方法
  async signup (ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('signup', {
        title: '用户注册'
      })
      return
    }
    const salt = bcrypt.genSaltSync(10)// 加密十次
    let { name, email, password } = ctx.request.body

    password = await bcrypt.hash(password, salt)

    const user = {
      name,
      email,
      password
    }
    // 存储到数据库
    const result = await UserModel.create(user)
    ctx.body = result
  },

  // 登录
  async signin (ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('signin', {
        title: '登录'
      })
    } else {
      const { name, password } = ctx.request.body
      const user = await UserModel.findOne({ name })
      if (user && await bcrypt.compare(password, user.password)) {
        ctx.session.user = {
          _id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
          email: user.email
        }
        ctx.flash = { success: '登录成功' }
        ctx.redirect('/')
      } else {
        ctx.flash = { warning: '用户名或密码错误' }
        ctx.redirect('back')
      }
    }
  },

  // 退出登录
  signout (ctx, next) {
    if (ctx.session.user) {
      ctx.session.user = null
      ctx.flash = { warning: '退出登录' }
      ctx.redirect('/')
    }
  }
}
