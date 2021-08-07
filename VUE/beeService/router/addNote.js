
const TravelModel = require('../model/Travel')

module.exports = {
  async add (ctx, next) {
    // console.log(ctx.request.body)
    const { title, content, contentImg, author } = ctx.request.body
    let note = {
      title, content, contentImg, author
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
  }
}