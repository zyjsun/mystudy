const UserModel = require('../model/user')
const bcrypt = require('bcryptjs')


module.exports = {
  // 注册方法
  async register (ctx, next) {
    console.log(ctx.request.body)
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
        resultCode: 414
      }
      return
    }
    // 存储到数据库
    await UserModel.create(newuser)
    ctx.body = {
      message: '注册成功',
      resultCode: 200
    }
  },

  // 登录
  async Login (ctx, next) {
    // console.log(ctx.request.body)
    const { name, password } = ctx.request.body;
    const user = await UserModel.findOne({ name })
    if (user && await bcrypt.compare(password, user.password)) {
      console.log(user);
      ctx.body = {
        message: '登录成功',
        resultCode: 200,
        _id: user._id,
      }
    } else {
      ctx.body = {
        message: '登录失败',
        resultCode: 444
      }
    }
  },
  async show (ctx, next) {
    const token = ctx.request.body

    const user = await UserModel.findOne({ _id: token })
    // console.log(user)
    ctx.body = {
      message: '更新成功',
      resultCode: 200,
      _user: user,
    }

  }


  // 退出登录
  //   signout (ctx, next) {
  //     if (ctx.session.user) {
  //       ctx.session.user = null
  //       ctx.flash = { warning: '退出登录' }
  //       ctx.redirect('/')
  //     }
  //   }
}

