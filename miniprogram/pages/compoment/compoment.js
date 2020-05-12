// pages/compoment/compoment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath: '',
    name: "陈贤云"
  },
  handleChooseAlbum:function(){
    wx.chooseImage({
      success:(res) => {
        // console.log(res)
        const imgPath = res.tempFilePaths[0]
        console.log('函数中的path:'+imgPath)
        // this.data.imgpath = imgPath
        this.setData({
          imgpath:imgPath
        })
        // console.log('data中的path：'+this.data.imgpath)
      }
    })
  },
  // 实现懒加载
  handleImgLoad:function(){
    console.log('图片加载完成')
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