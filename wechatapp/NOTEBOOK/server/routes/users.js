const router = require('koa-router')()
const userService=require('../controllers/mySqlConfig')
router.prefix('/users')

//定义登录的接口
router.post('/userLogin',async(ctx,next)=>{
  //拿到前端给我的参数
  //去数据库里面匹配
  let _username=ctx.request.body.username
  let _userpwd=ctx.request.body.userpwd
  // console.log(_username,_userpwd);
  //去数据库里面匹配
 await userService.userLogin(_username,_userpwd).then(res=>{
   console.log(res)
 })

})

module.exports = router
