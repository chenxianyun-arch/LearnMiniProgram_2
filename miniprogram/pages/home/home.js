// pages/home/home.js
Page({
  data: {
    message: "你好，小程序",
    firstname: "kobe",
    lastname: "byant",
    nowtime: '',
    isActive: false
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowtime:new Date().toLocaleTimeString()
      })
    },1000)
  },
  handleSwitchColor(){
    // console.log("----");
    this.setData({
      isActive:!this.data.isActive
    })
  }
})