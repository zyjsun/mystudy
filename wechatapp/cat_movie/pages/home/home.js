// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:49,
    size1:14,
    size2:14,
    size3:14,
    size4:14,
    list:{},
    list2:{}
  },


  tabchange(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index
    
    if (index == '1') {
      this.setData({
        left: 49,
        size1: 16,
        size2:14,
        size3:14,
        size4:14
      })
    } else if (index == '2') {
      this.setData({
        left: 115,
        size1: 14,
        size2:16,
        size3:14,
        size4:14
      })
    } else if (index =='3') {
      this.setData({
        left: 181,
        size1: 14,
        size2:14,
        size3:16,
        size4:14
      })
    } else {
      this.setData({
        left: 245,
        size1: 14,
        size2:14,
        size3:14,
        size4:16
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
      method:'GET',
      success:res=>{
        // console.log(res);
        this.setData({
          list:res.data
        })
      }
    })
    wx.request({
      url: 'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot',
      method:'GET',
      success:res=>{
        console.log(res);
        this.setData({
         list2 :res.data
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