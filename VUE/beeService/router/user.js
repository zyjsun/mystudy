const UserModel = require('../model/user')
const bcrypt = require('bcryptjs')
module.exports = {
  // 注册方法
  async register (ctx, next) {
    const salt = bcrypt.genSaltSync(10)// 加密十次
    let { name, password } = ctx.request.body
    password = await bcrypt.hash(password, salt)
    const user = {
      name,
      password
    }
    // 存储到数据库
    const result = await UserModel.create(user)
    ctx.body = result
  },

  // 登录
  async Login (ctx, next) {
    const { name, password } = ctx.request.body
    const user = await UserModel.findOne({ name })
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.session.user = {
        _id: user._id,
        name: user.name,
      }
      Toast('登录成功')
      ctx.redirect('/')
    } else {
      Toast('登录失败')
      ctx.redirect('back')
    }

  },

  // 退出登录
  //   signout (ctx, next) {
  //     if (ctx.session.user) {
  //       ctx.session.user = null
  //       ctx.flash = { warning: '退出登录' }
  //       ctx.redirect('/')
  //     }
  //   }
}

