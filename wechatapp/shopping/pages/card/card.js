// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    selectAllStatus:false,
    totalPrice: 0,
  },
  selectList(e){
       let index=e.currentTarget.dataset.index
      // console.log(index); 绑个index
      let carts=this.data.carts
      // let selected=`carts[${index}].selected` //"carts["+index+"]+selected"
      // this.setData({
      //   [selected]:!this.data.carts[index].selected
      // })
      const selected = carts[index].selected;
      carts[index].selected = !selected;
     // console.log(carts[index].selected)
      this.setData({
      carts: carts
      })
      this.changeAllSelectStatus()
      this.getTotalPrice()
  },
  selectAll(e){
    let selectAllStatus=this.data.selectAllStatus
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = !selectAllStatus;
    }
    selectAllStatus=!selectAllStatus
    this.setData({
      selectAllStatus,
      carts: carts
    })
    
  },
  changeAllSelectStatus() {
    let carts = this.data.carts
    for(let i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        this.setData({
          selectAllStatus: false
        })
        break;
      } else {
        this.setData({
          selectAllStatus: true
        })
      }
    }
  },
  //计算总价格
  getTotalPrice(){
    let carts = this.data.carts
    let price=0
    for(let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
       price+=carts[i].price
      }  
    }
    console.log(price)
    this.setData({
      totalPrice: price
    })
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
        setTimeout(()=>{
              this.setData({
                carts:[
                  { id: 1, title: '新鲜芹菜 半斤', image: '/images/s5.png', num: 4, price: 0.01, selected: true },
                  { id: 2, title: '素米 500g', image: '/images/s6.png', num: 1, price: 0.03, selected: false }
                ]
              })
              this.changeAllSelectStatus()
              this.getTotalPrice()
        },1000)
       
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