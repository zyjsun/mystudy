const Lovetext = require('../model/Lovetext')
module.exports = {
  async getLoveContext (ctx, next) {
    const { _id } = ctx.request.body
    let res = await Lovetext.findOne(_id)

    if (res !== null) {

    } else {
      await Lovetext.create()
    }
  }
}