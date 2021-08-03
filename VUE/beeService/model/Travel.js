// 设计旅游日记的表模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计用户模型
const TravelSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  content: {
    type: String,
    require: true,
    unique: true
  },
  contentImg: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  authorImg: {
    type: String,
    require: true
  },
  nums: {
    type: Number,
    dafault: 0
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 通过 mongoose.model 往数据库里面映射出一张User表
module.exports = mongoose.model('Travel', TravelSchema)
