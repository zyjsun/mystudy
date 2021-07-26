// routes/home.js
module.exports = {
  async index (ctx, next) {
    await ctx.render('index', {
      title: '我的博客',
      desc: '欢迎来到zyj的博客'
    })
  }
}
