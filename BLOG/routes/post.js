// const { create } = require('../models/user')
// const { index } = require('./home')
// 从数据库取文章
module.exports = {
  async index (ctx, next) {
    // const pageSize = 5
    // const currentPage = parseInt(ctx.query.page) || 1
    // const cname = ctx.query.c
    // let cid
    // if (cname) { // 返回对应的分类文章

    // }
  },
  async create (ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('create', {
        title: '新建文章',
        categories: [{ _id: 1, title: '美食' }]

      })
    } else { // 发布文章

    }
  }
}
