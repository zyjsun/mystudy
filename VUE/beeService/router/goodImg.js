
const GoodImgModel = require('../model/GoodImg')
module.exports = {
  async getGoodImg (ctx, next) {
    const GoodImgArray = await GoodImgModel.find({})
    // console.log(GoodImgArray);
    ctx.body = {
      resultCode: 200,
      GoodImgArray
    }
  },
  async sendGoodImg (ctx, next) {

    const { allGoodImg, index } = ctx.request.body
    // console.log(ctx.request.body);
    let __v = 0
    let list = []
    // let _id = '6117d709ef536640100245cc'
    // console.log((await GoodImgModel.exists()).valueOf)
    list = await GoodImgModel.find({})
    console.log(list);
    if (list.toString() !== '') {
      console.log(2);
      await GoodImgModel.findOneAndUpdate(__v, {
        allGoodImg
      })
    } else {
      await GoodImgModel.create(allGoodImg)
    }
    ctx.body = {
      resultCode: 200,
      list
    }
  }
}