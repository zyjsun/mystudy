// miniprogram/pages/bookCity/bookCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: [],
    classifyData: []
  },

  getList() {
    let self = this
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getList',
      data: {},
      success(res) {
        console.log(res.result);
        self.setData({
          hotData: res.result.hotData,
          classifyData: res.result.classifyData
        })
        wx.hideLoading()
      }
    })
  },

  toReading(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../bookSection/bookSection?url=${url}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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