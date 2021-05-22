import api from '../../utils/api'
let $api = api.API

const app = getApp();
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    pwd: ''
  },

  searchBox(e) {
    // console.log(e);
    let username = e.detail.value.username
    let pwd = e.detail.value.pwd
    this.setData({
      username,
      pwd
    })
    this.login()
  },

  login() {
    $api.login({
      phone: this.data.username,
      password: this.data.pwd
    }).then(res => {
      console.log(res);
      let code = res.data.code
      if (code === 200) {
        console.log('登陆成功');
        wx.setStorageSync('userId', res.data.account.id)
        app.globalData.userId = res.data.account.id
        // 保存cookie登录信息到本地
        this.saveUserLoginInfo(res.cookies)
        wx.redirectTo({ // 跳转到首页
          url: '/pages/mine/mine'
        });
      }
    })
  },
  // 保存用户登录凭证
  saveUserLoginInfo(cookies) {
    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i].search('MUSIC_U=') !== -1) {
        wx.setStorageSync('login_token', cookies[i])
        app.globalData.login_token = cookies[i]
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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