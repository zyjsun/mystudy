
const Lovetext = require('../model/Lovetext')
module.exports = {
  async postLoveContext (ctx, next) {
    const { _id, goodArr } = ctx.request.body
    // console.log(_id, goodArr);
    let res = await Lovetext.findOne({ _id })
    // console.log(res);
    if (res !== null) {
      await Lovetext.updateOne({ _id }, {
        goodArr
      })
    } else {
      let LoveContent = { _id, goodArr }
      await Lovetext.create(LoveContent)
    }
    ctx.body = {
      resultCode: 200
    }
  },
  async getLoveContext (ctx, next) {
    const { _id } = ctx.request.body
    let res = await Lovetext.findOne({ _id })
    ctx.body = {
      data: res,
      resultCode: 200
    }
  },
  async delLoveContent (ctx, next) {
    const { _id, index } = ctx.request.body
    // console.log(index, _id);
    let obj = await Lovetext.findById({ _id })
    console.log(obj.goodArr);
    obj.goodArr[index] = false
    let goodArr = obj.goodArr
    let res = await Lovetext.findByIdAndUpdate({ _id }, {
      goodArr
    })
    if (res !== null) {
      ctx.body = {
        resultCode: 200,
        message: '删除成功'
      }
    }
  }
}