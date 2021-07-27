// 设计用户的表模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计文章表模型
const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'USer',
    require: true
  },
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  pv: {
    type: Number,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 初次与修改
PostSchema.pre('save', function (next) { // 监听文章是否初次保存
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()// 中间件
})

// 通过 mongoose.model 往数据库里面映射出一张Post表
module.exports = mongoose.model('Post', PostSchema)
