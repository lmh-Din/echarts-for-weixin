import * as echarts from '../../ec-canvas/echarts';

let chart = null;
var baseUrl = 'https://www.guojiangliu.com/';
var studentName = 'A';
var batch = "A67"

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  console.log(baseUrl)
  // wx.request({
  //   url: 'url',
  // })
  var option = {
    title: {
        text: studentName+'学生'+batch+'考试成绩'
    },
    color: ['#696969'],
    tooltip: {},
    legend: {
        data:['销量'],
        backgroundColor: 'white'
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5.5, 20, 36, 10, 10, 20]
    }]
  };

  chart.setOption(option);
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
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});
