<template>
  <div class="vue_charts">
    <div class="box">
      <div class="titleleft">柱状图基础扩展</div>
      <div id="main"></div>
      <div class="application">
        <p>应用场景: 投资规划类</p>
        <p>展示效果: 如上图</p>
        <p>功能描述: 展示同一时间不同维度得各类信息得统计情况</p>
        <p>定制开发: 多维度开发</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barbasics',
  data () {
    return {
      isCollapse: false
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#08263a',
        color: ['#5793f3', '#d14a61', '#675bba', 'black'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '30%'
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ['规划执行', '投资安排', '投资完成', '建设进展'],
          textStyle: {
            color: '#35938d'
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#675bba'
              }
            },
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '投资安排',
            min: 0,
            max: 3000,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#5793f3'
              }
            },
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '投资完成',
            min: 0,
            max: 3000,
            position: 'right',
            offset: 80,
            axisLine: {
              lineStyle: {
                color: '#35938d'
              }
            },
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '建设进展',
            min: 0,
            max: 250,
            position: 'right',
            offset: 160,
            axisLine: {
              lineStyle: {
                color: '#d14a61'
              }
            },
            axisLabel: {
              formatter: '{value} 公里'
            }
          },
          {
            type: 'value',
            name: '规划执行',
            min: 0,
            max: 3000,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#675bba'
              }
            },
            axisLabel: {
              formatter: '{value} 万元'
            }
          }
        ],
        series: [
          {
            name: '投资安排',
            type: 'bar',
            data: [
              200.0,
              400.9,
              700.0,
              230.2,
              250.6,
              760.7,
              350.6,
              1620.2,
              320.6,
              200.0,
              60.4,
              300.3
            ]
          },
          {
            name: '投资完成',
            type: 'bar',
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: '建设进展',
            type: 'bar',
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          },
          {
            name: '规划执行',
            type: 'bar',
            yAxisIndex: 3,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      })
      window.onresize = myChart.resize
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: #f2f2f2;
  border-top:1px solid #bbbebd;
}
#main {
  margin: 3% auto;
  width:90%;
  height:53%;
}
.application{
  height:28%;
  padding:0 5%;
}
.application>p{
  font-size:14px;
  color:#a1a5a4;
  font-family: "微软雅黑";
}
.titleleft{
  text-align:center;
  margin-top:20px;
  font-size:14px;
  color:#4e4e4e;
}
</style>
