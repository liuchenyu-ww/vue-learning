<template>
  <div class='vue_charts'>
    <div class='box'>
      <div class="titleleft">柱状图样式扩展</div>
      <div id="main"></div>
      <div class="application">
        <p>应用场景:年/月/日度数目情况等</p>
        <p>展示效果:如上图所示</p>
        <p>功能描述:柱状图表示，方便用户展示引用</p>
        <p>开发简单描述:使用china.js展示柱状图，引入多个数据，使用echarts.js修正样式及功能</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightbox',
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
      myChart.setOption({
        backgroundColor: '#08263a',
        legend: {
          data: ['维护次数', '培训次数'],
          textStyle: {
            color: '#35938d'
          }
        },
        grid: {
          x: 50,
          x2: 30,
          y: 40,
          y2: 45
        },
        xAxis: [
          {
            type: 'category',
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
            ],
            axisLine: {
              show: false,
              lineStyle: {
                color: '#277ace'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#43eec6'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#277ace'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#43eec6'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#fff'
              }
            }
          },
          {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#277ace'
              }
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#277ace'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#fff'
              }
            }
          },
          {
            type: 'value',
            min: 0,
            max: 500,
            interval: 100,
            axisLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#277ace'
              }
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#277ace'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '维护次数',
            type: 'bar',
            data: [40, 50, 80, 45, 60, 70.7, 175.6, 182.2, 48.7, 18.8, 70, 120],
            itemStyle: {
              normal: {
                color: '#65f5f3',
                barBorderRadius: [10, 10, 10, 10],
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#adc4f8'
              }
            }
          },
          {
            name: '培训次数',
            type: 'bar',
            yAxisIndex: 1,
            data: [40, 50, 80, 45, 60, 70.7, 175.6, 182.2, 48.7, 18.8, 70, 120],
            itemStyle: {
              normal: {
                color: '#277ace',
                barBorderRadius: [10, 10, 10, 10],
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#adc4f8'
              }
            }
          },
          {
            name: '平均',
            type: 'line',
            smooth: true,
            yAxisIndex: 2,
            data: [80, 200, 120, 70, 90, 160, 175.6, 182.2, 48.7, 90, 70, 120],
            itemStyle: {
              normal: {
                color: '#00fff5',
                barBorderRadius: [10, 10, 10, 10]
              }
            }
          }
        ]
      })
      window.onresize = myChart.resize
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: #f2f2f2;
  border-top: 1px solid #bbbebd;
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
