const app=getApp()//获取小程序全局的变量

const GET='GET'

const POST='POST'

const baseUrl='http://localhost:3000'

function request(method,url,data){
  return new Promise((resolve,reject)=>{
    let header={
      'content-type':'application/json',
      'cookie':app.globalData.login_token
    }

    wx.request({
      url: baseUrl+url,
      method:method,
      data:method===POST?JSON.stringify(data):data,//变成字符串
      header:header,
      success(res){
        if(res.data.code==200){
          resolve(res)
        }else{
          let msg = res.data.msg
          wx.showToast({
            title: msg,
            icon: 'none',
            mask: true,
            duration: 2000
          })
        }
      },
      fail(err){
        reject(err)
      }
    })//相当于localhost 3000
  })

}

const API={
  login:(data)=>request(GET,'/login/cellphone',data) ,//手机登录的一个函数
  getUserDetail:(data)=>request(GET,'/user/detail',data)//登录获取用户信息
}

module.exports={
  API:API
}