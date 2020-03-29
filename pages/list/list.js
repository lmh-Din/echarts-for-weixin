const app = getApp();

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'B76 Dashboard',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    loading: true,
    studentList:[
    ]
  },
  onLoad: function(ops) {
    var that = this;
    wx.request({
      url: 'https://www.guojiangliu.com/dashboard/student/list?classId=2',
      // data: {
      //   classId: '2'
      // },
      method: 'POST',
      success: function(res){
        that.setData({
          studentList: res.data,
          loading: false
        });
      }
    })
  },

  onReady() {
  },

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/index'
    });
  },
  toStudentDashboard: function(e){
      console.log(e)
      wx.navigateTo({
        url: '../studentChat/index?id='+e.target.id
      })
  }
});
