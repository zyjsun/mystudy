const router = require('koa-router')()
const userService=require('../controllers/mySqlConfig')
router.prefix('/users')
//根据id查找文章类型
router.post('/findNoteDetailByid',async(ctx,next)=>{
  let id=ctx.request.body.id;
  await userService.findNoteDetailByid(id).then(res=>{
    // console.log(res);
    let r='';
    //匹配
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

//找到类型
router.post('/findNoteListByType',async(ctx,next)=>{
  let note_type=ctx.request.body.note_type;
  console.log(note_type);
  await userService.findNoteListByType(note_type).then(res=>{
    // console.log(res);
    let r='';
    //匹配
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }

  })
})
//定义登录的接口
router.post('/userLogin',async(ctx,next)=>{
  //拿到前端给我的参数
  //去数据库里面匹配
  let _username=ctx.request.body.username
  let _userpwd=ctx.request.body.userpwd
  // console.log(_username,_userpwd);
  //去数据库里面匹配
 await userService.userLogin(_username,_userpwd).then(res=>{
  //  console.log(res);
  let r='';
  if(res.length){
    r='ok'
    let result={
      id:res[0].id,
      username:res[0].username,
      nickname:res[0].nickname
    }
    ctx.body={
      code: 200,
      data: result,
      mess: '登录成功'
    }
  }else{
    r='error'
    ctx.body={
      code: '80004',
      data: r,
      mess: '账号或密码错误'
    }
  }
 }).catch(err=>{
   ctx.body={
    code: '80002',
    data: err
  }
 })

})

router.post('/userRegister',async(ctx,next)=>{
  let _username=ctx.request.body.username
  let _userpwd=ctx.request.body.userpwd
  let _nickname=ctx.request.body.nickname
  // console.log(_username,_userpwd,_nickname)
  if(!_username||!_nickname||!_userpwd){
    ctx.body={
      code: '80001',
      mess: '用户名，密码与昵称不能为空'
    }
  }else{//判断数据库中是否存在重复的用户名
   await userService.findUser(_username).then(async (res)=>{//存储是异步进行的
    console.log(res)
    if(res.length){
      ctx.body={
        code: '80003',
        mess: '用户名已存在'
      }
    }else{
      let result=[
       _username,
        _userpwd,
       _nickname, 
    ]//为数组
      //注册成功
     await userService.insertUser(result).then(res=>{
       let r=''
      if(res.affectedRows!==0){//注册的操作成功
        ctx.body={
          code: 200,
          data: r,
          mess: '注册成功'
          }
      }else{
        r='error'
        ctx.body={
          code: '80002',
          data: r,
          mess: '注册失败'
          }
      }
    
      })
   
    }
   }
   
   )
  }

})


module.exports = router
