module.exports = {
  port: process.env.PORT || 3000,
  session: {
    key: 'travel',
    maxAge: 86400000// 一个绘画的数据量
  },
  mongodb: 'mongodb://localhost:27017/travel'
}
