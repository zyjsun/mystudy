
const TravelModel = require('../model/Travel')

module.exports = {
  async add (ctx, next) {
    const { title, content, contentImg, author, authorImg, nums } = ctx.request.body
    let note = {
      title, content, contentImg, author, authorImg, nums
    }
    await TravelModel.create(note)
    ctx.body = {
      message: '添加成功',
      resultCode: 200
    }
  }
}