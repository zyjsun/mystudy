// 设计用户的表模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计用户模型
const CommentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'USer'
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'USer'
  },
  content: {
    type: String,
    require: true
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 通过 mongoose.model 往数据库里面映射出一张Comment表
module.exports = mongoose.model('Comment', CommentSchema)
