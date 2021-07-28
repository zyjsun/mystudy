
const CommentModel = require('../models/comment')

module.exports = {
  async create (ctx, next) {
    const { content } = ctx.request.body
    // console.log(content)
    if (!content) {
      ctx.flash = { warning: '评论不能为空' }
      ctx.redirect('back')
    }
    const comment = Object.assign(ctx.request.body, {
      from: ctx.session.user._id
    })
    await CommentModel.create(comment)
    ctx.flash = { success: '留言成功' }
    ctx.redirect('back')
  },
  async Delete (ctx, next) {
    const deleteId = ctx.params.id
    if (deleteId.length !== 24) {
      ctx.throw(404, '评论不存在')
    }
    const comment = await CommentModel.findById(deleteId)
    if (!comment) {
      ctx.throw(404, '评论不存在')
    }
    if (comment.from.toString() !== ctx.session.user._id.toString()) {
      ctx.flash = { warning: '没有权限删除' }
      ctx.redirect('back')
      return
    }
    await CommentModel.findByIdAndRemove(deleteId)
    ctx.flash = { success: '删除成功' }
    ctx.redirect('back')
  }
}
