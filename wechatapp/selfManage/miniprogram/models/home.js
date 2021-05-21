export default class HomeModel{
    static getUserInfo(){
       return new Promise((resolve,reject)=>{
         wx.getSetting({
           success: (res) => {
             //判断是否授权
             if(res.authSetting['scope.userInfo']){
                wx.getUserInfo({
                  success:result=>{
                    resolve(result)
                  }
                })
             }else{
               reject(result)
             }
           },
           fail: (err) => {
             reject(err)
           },
           complete: () => {},
         })
       })
    }//类里面的私有方法
}