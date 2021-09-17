const jwt = require('jsonwebtoken')

// 封装
// 生成token
function sign (option) {
  return jwt.sign(option, '666', {
    expiresIn: 60
  })
}

let varify = (admin) => (ctx, next) => {
  let jwtToken = ctx.req.headers.authorization
  if (jwtToken) {
    jwt.verify(token, '666', function (err, decoded) {
      if (err) {
        ctx.body = {
          status: 401,
          message: 'token失效'
        }
      } else {
        // 做鉴权（判断是不是管理员）
        if (isAdmin) {
          // 解析admin
          let {
            admin
          } = decoded
          if (admin) {
            next()
          } else {
            ctx.body = {
              status: 401,
              message: '你不是管理员，权限不够'
            }
          }
        } else {
          next()
        }
      }
    });
  } else {
    ctx.body = {
      status: 401,
      message: '请提供token'
    }
  }
}

module.exports = {
  sign,
  varify
}
