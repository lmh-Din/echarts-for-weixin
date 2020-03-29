import * as echarts from '../../ec-canvas/echarts';

var studentId;

let chart = null;
function initMultiBarForMainChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  console.log("studentId " + studentId)
  wx.request({
    url: 'https://www.guojiangliu.com/dashboard/student/multiBarForMain',
    method: 'POST',
    data: {
      studentId: studentId
    },
    success: function (res) {
      var data = res.data;
      console.log(data)

      var option = {
        title: {
          text: data.chatName
        },
        legend: {
          left: 'right'
        },
        color: ['#ff7f50','#87cefa', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {},
        dataset: {
          dimensions: data.dimensions,
          source: data.source
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      };
      chart.setOption(option);
    }
  })
  return chart;
}

let barChart = null;
function initMultiBarForOtherChart(canvas, width, height, dpr) {
  barChart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(barChart);
  console.log("studentId " + studentId)
  wx.request({
    url: 'https://www.guojiangliu.com/dashboard/student/multiBarForOther',
    method: 'POST',
    data: {
      studentId: studentId
    },
    success: function (res) {
      var data = res.data;
      console.log(data)

      var option = {
        title: {
          text: data.chatName
        },
        legend: {
          left: 'right'
        },
        color: ['#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {},
        dataset: {
          dimensions: data.dimensions,
          source: data.source
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    // color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      };
      barChart.setOption(option);
    }
  })
  return barChart;
}

let radarChart = null;

function initRadarChart(canvas, width, height, dpr) {
  radarChart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(radarChart);
  console.log("studentId " + studentId)
  wx.request({
    url: 'https://www.guojiangliu.com/dashboard/student/singleRadar',
    method: 'POST',
    data: {
      studentId: studentId
    },
    success: function (res) {
      var data = res.data;
      console.log(data)

      var option = {
        title: {
          text: data.chatName
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'right',
          data: ['2019期末', '2020模一', '2020模二']
        },
        color: ['#6e7074', '#546570', '#c4ccd3'],
        radar: [{
          indicator: data.indicator
          // center: ['100%', '100%']
        }],
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
              console.log("params " + params)
              // var echoStr = "";
              // var arr = params.data.value;
              // for(var i=0; i<arr.length; i++){
              //   echoStr = echoStr + arr[i];
              //   if (i !== arr.length-1){
              //     echoStr = echoStr + '\n';
              //   }
              // }
              // var echoStr = ""
              // wx.request({
              //   url: 'https://www.guojiangliu.com/dashboard/student/radarCallBack',
              //   method: 'POST',
              //   data: {
              //     studentId: studentId,
              //     examName: params.name
              //   },
              //   success: function(res){
              //     resolve(res);
              //   },
              //   fail: function(res){
              //     reject(res);
              //   }
              // })
              return params.name;
            }
          },
          areaStyle: {},
          data: data.data
        }]
      };
      radarChart.setOption(option);
    }
  })
  return radarChart;
}

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

  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  },
  onLoad: function (ops) {
    console.log(ops.id)
    studentId = ops.id;
    var that = this;
    that.setData({
      ec: {
        onInit: initMultiBarForMainChart
      },
      bar: {
        onInit: initMultiBarForOtherChart
      },
      radar: {
        onInit: initRadarChart
      }
    })
  }
});