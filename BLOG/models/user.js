// 设计用户的表模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计用户模型
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    dafault: false
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 通过 mongoose.model 往数据库里面映射出一张User表
module.exports = mongoose.model('USer', UserSchema)
