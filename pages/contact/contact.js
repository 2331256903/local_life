// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    // 1. 定义节流阀
    isloading: false
  },

  getColors() {
    // 显示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    // 刚开始调用方法时, 修改节流阀的值为true
    this.setData({
      isloading: true
    })
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/color',
      method: 'get',
      success: ({data: res}) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete: () => {
        wx.hideLoading() // 隐藏loading效果
        // 调用完成后将节流阀设为false
        this.setData({
          isloading: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getColors()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 判断节流阀的值, 若为true组织接
    if (!this.data.isloading) {
      // 调用获取随机颜色数据
      this.getColors()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})