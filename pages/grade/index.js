import * as echarts from '../../ec-canvas/echarts';

let chart = null;
var baseUrl = 'https://www.guojiangliu.com/';
var studentName = 'A';
var batch = "A67";
var studentId;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  console.log("studentId "+studentId)
  wx.request({
    url: 'https://www.guojiangliu.com/dashboard/studentDashboardDetail',
    method: 'POST',
    data: {
      studentId: studentId,
      examId: 2
    },
    success: function(res){
      var data = res.data;
      console.log(data)
      var student = data.student;

      var option = {
        title: {
            text: student.name+batch+'考试成绩'
        },
        color: ['#696969'],
        tooltip: {},
        legend: {
            data:['成绩'],
            backgroundColor: 'white'
        },
        xAxis: {
            data: ["语文","数学","英语","政治","历史","地理","生物"]
        },
        yAxis: {},
        series: [{
            name: '成绩',
            type: 'bar',
            data: data.gradeList
        }]
      };
    
      chart.setOption(option);
    }
  })
  
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  },
  onLoad: function(ops){
    console.log(ops.id)
    studentId = ops.id;
    var that = this;
    that.setData({
      ec: {
        onInit: initChart
      }
    })
  }
});
