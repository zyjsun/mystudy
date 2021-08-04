const UserModel = require('../model/user')
const bcrypt = require('bcryptjs')
module.exports = {
  // 注册方法
  async register (ctx, next) {
    const salt = bcrypt.genSaltSync(10)// 加密十次
    let { name, password } = ctx.request.body
    password = await bcrypt.hash(password, salt)
    const newuser = {
      name,
      password
    }
    let isnew = await UserModel.find({
      name: newuser.name
    })
    if (isnew.length) {
      ctx.body = {
        message: '该账号已存在',
        errocode: 414
      }
      return
    }
    // 存储到数据库
    const result = await UserModel.create(newuser)
    Toast('注册成功', 'success')
    ctx.body = result
  },

  // 登录
  async Login (ctx, next) {
    const { name, password } = ctx.query;
    const user = await UserModel.findOne({ name })
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.session.user = {
        _id: user._id,
        name: user.name,
      }
      Toast('登录成功', 'success')
      ctx.redirect('/')
    } else {
      Toast('登录失败', 'fail')
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

