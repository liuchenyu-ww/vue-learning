<template>
  <div class="vue_charts">
    <div class="box">
      <div id="main"></div>
      <div class="application">
        <p>应用场景:</p>
        <p>展示效果:</p>
        <p>功能描述:</p>
        <p>开发简单描述:</p>
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
      var xAxisData = []
      var data = []
      var data2 = []
      for (var i = 0; i < 50; i++) {
        xAxisData.push(i)
        data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
      }
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#08263a',
        xAxis: [
          {
            show: false,
            data: xAxisData
          },
          {
            show: false,
            data: xAxisData
          }
        ],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: [
              '#4a657a',
              '#308e92',
              '#b1cfa5',
              '#f5d69f',
              '#f5898b',
              '#ef5055'
            ]
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#4a657a'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#08263f'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: 'back',
            type: 'bar',
            data: data2,
            z: 1,
            itemStyle: {
              normal: {
                opacity: 0.4,
                barBorderRadius: 5,
                shadowBlur: 3,
                shadowColor: '#111'
              }
            }
          },
          {
            name: 'Simulate Shadow',
            type: 'line',
            data: data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: 'linear',
            animationDuration: 1200,
            lineStyle: {
              normal: {
                color: 'transparent'
              }
            },
            areaStyle: {
              normal: {
                color: '#08263a',
                shadowBlur: 50,
                shadowColor: '#000'
              }
            }
          },
          {
            name: 'front',
            type: 'bar',
            data: data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 20
        },
        animationDelayUpdate: function (idx) {
          return idx * 20
        }
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
  border-top: 1px solid #bbbebd;
}
#main {
  margin: 3% auto;
  width:90%;
  height:60%;
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
</style>
