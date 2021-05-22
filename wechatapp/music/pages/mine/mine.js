// pages/mine/mine.js
import api from '../../utils/api'
let $api = api.API

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    login_token: '',
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 验证是否登录
    this.verification()
  },

  verification() {
    let login_token = wx.getStorageSync("login_token");
    let userId = wx.getStorageSync('userId')
    if (!login_token) {
      this.tips('未登录，请登录后尝试！', '去登录', true, '/pages/login/login')
    } else {
      this.setData({
        userId: app.globalData.userId || userId,
        login_token
      })
      this.getUserDetail() // 获取用户信息
    }
  },

  getUserDetail() {
    $api.getUserDetail({uid: this.data.userId}).then(res => {
      console.log(res, '用户信息');
      this.setData({
        user: res.data
      })
    })
  },

  // 提示框
  tips(content, confirmtext, isShowCancel, url) {
    wx.showModal({
      content: content,
      showCancel: isShowCancel,
      cancelText: '取消',
      cancelColor: '#de655c',
      confirmText: confirmtext,
      confirmColor: '#de655c',
      success: (result) => {
        if (result.confirm) { // 用户点了确认按钮
          wx.navigateTo({
            url: url
          }); 
        } else if (result.cancel) { // 用户点了取消按钮
          wx.navigateTo({
            url: '/pages/find/find'
          }); 
          app.globalData.navId = 2
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
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