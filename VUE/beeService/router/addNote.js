
const TravelModel = require('../model/Travel')
module.exports = {
  async add (ctx, next) {

    const { title, content, contentImg, author, authorImg, goodnums } = ctx.request.body

    let note = {
      title, content, contentImg, author, authorImg, goodnums
    }
    await TravelModel.create(note)
    ctx.body = {
      message: '添加成功',
      resultCode: 200
    }
  },
  async show (ctx, next) {
    const allNote = await TravelModel.find({})
    ctx.body = {
      allNote,
      resultCode: 200
    }
  },
  async del (ctx, next) {
    const { _id } = ctx.request.body
    await TravelModel.findByIdAndRemove({ _id })
    ctx.body = {
      message: '删除成功',
      resultCode: 200
    }
  },
  async goods (ctx, next) {
    // console.log(ctx.request.body)
    const { goodnums, _id } = ctx.request.body
    await TravelModel.findByIdAndUpdate(_id, { goodnums })
    ctx.body = {
      resultCode: 200
    }
  }

}

