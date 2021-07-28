
const CategoryModel = require('../models/category')

module.exports = {
  async list (ctx, next) {
    const categories = await CategoryModel.find({})
    await ctx.render('category', {
      title: '新建分类',
      categories
    })
  },
  async create (ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('create_category', {
        title: '新建分类'
      })
    } else {
      // 发步分类
      const { name, title, desc } = ctx.request.body
      let errMsg = ''
      if (title === '') {
        errMsg = '标题不能为空'
      } else if (name === '') {
        errMsg = '分类名不能为空'
      }
      if (errMsg) {
        ctx.flash = { warning: errMsg }
        ctx.redirect('back')
      } else { // 写入数据库
        const existed = await CategoryModel.findOne({ title })
        if (existed) {
          ctx.flash = { warning: '分类名已存在' }
          ctx.redirect('back')
          return
        }
        const category = { name, title, desc }
        await CategoryModel.create(category)
        // console.log(res)
        ctx.flash = { success: '分类添加成功' }
        ctx.redirect('/category')
      }
    }
  },
  async del (ctx, next) {
    const deleteId = ctx.params.id
    if (deleteId.length !== 24) {
      ctx.throw(404, '分类不存在')
    }
    const category = await CategoryModel.findById(deleteId)
    if (!category) {
      ctx.throw(404, '分类不存在')
    } else {
      await CategoryModel.findByIdAndRemove(deleteId)
      ctx.flash = { success: '删除成功' }
      ctx.redirect('back')
    }
  }

}
