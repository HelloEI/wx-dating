// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'WeChat',
    userInfo: null,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.setData({
      userInfo: app.data.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh;
    console.info(123)
  },

  backIndex () {
    wx.switchTab({
      url: '/pages/index/index',
      success () {
        console.info('success')
      }
    })
  }
})
