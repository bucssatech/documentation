// pages/welcomePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    visited: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ visited: false })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  toCalculator: function() {
    let _this = this
    wx.navigateTo({
      url: '../index/index',
      success: function() {
        setTimeout(function() {
          _this.setData({ visited: true })
        }, 1000)
      }
    })
  }
})