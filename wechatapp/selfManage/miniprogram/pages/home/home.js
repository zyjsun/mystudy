import HomeModel from  '../../models/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:false,

  },
onAuthorize(e){
console.log(e.detail.userInfo)
      if(e.detail.userInfo) {
            this.setData({
             userInfo: e.detail.userInfo
                    })
                    //本地保存首次授权得到的用户信息
                wx.setStorageSync('userInfo', e.detail.userInfo);
            }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.initUserInfo()
  },
  initUserInfo(){
          // HomeModel.getUserInfo().then(res=>{
          //   console.log(res)
          //   this.setData({
          //      userInfo: res.userInfo
          //    })
          // })
      wx.getStorage({
        key:'userInfo',
        success:(res)=>{
          // console.log(res)
          this.setData({
            userInfo:res.data
          })
        }
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})