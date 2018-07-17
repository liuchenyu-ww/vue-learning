<template>
  <div class="vue_charts">
    <div class="box">
      <div id="main" style=""></div>
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
require('../../static/china.js')
export default {
  name: 'rightbox',
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('main'))
      let nameTitle = '迁徙人数'
      let subname = '模拟数据'
      let nameColor = 'rgb(55, 75, 113)'
      let nameFontFamily = '等线'
      let subnameFontSize = 15
      let nameFontSize = 18
      let mapName = 'china'
      let data = [
        { name: '北京', value: 177 },
        { name: '天津', value: 42 },
        { name: '河北', value: 102 },
        { name: '山西', value: 81 },
        { name: '内蒙古', value: 47 },
        { name: '辽宁', value: 67 },
        { name: '吉林', value: 82 },
        { name: '黑龙江', value: 66 },
        { name: '上海', value: 24 },
        { name: '江苏', value: 92 },
        { name: '浙江', value: 114 },
        { name: '安徽', value: 109 },
        { name: '福建', value: 116 },
        { name: '江西', value: 91 },
        { name: '山东', value: 119 },
        { name: '河南', value: 137 },
        { name: '湖北', value: 116 },
        { name: '湖南', value: 114 },
        { name: '重庆', value: 91 },
        { name: '四川', value: 125 },
        { name: '贵州', value: 62 },
        { name: '云南', value: 83 },
        { name: '西藏', value: 9 },
        { name: '陕西', value: 80 },
        { name: '甘肃', value: 56 },
        { name: '青海', value: 10 },
        { name: '宁夏', value: 18 },
        { name: '新疆', value: 67 },
        { name: '广东', value: 123 },
        { name: '广西', value: 59 },
        { name: '海南', value: 14 }
      ]

      let geoCoordMap = {}
      let toolTipData = [
        {
          name: '北京',
          value: [{ name: '迁入', value: 95 }, { name: '迁出', value: 82 }]
        },
        {
          name: '天津',
          value: [{ name: '迁入', value: 22 }, { name: '迁出', value: 20 }]
        },
        {
          name: '河北',
          value: [{ name: '迁入', value: 60 }, { name: '迁出', value: 42 }]
        },
        {
          name: '山西',
          value: [{ name: '迁入', value: 40 }, { name: '迁出', value: 41 }]
        },
        {
          name: '内蒙古',
          value: [{ name: '迁入', value: 23 }, { name: '迁出', value: 24 }]
        },
        {
          name: '辽宁',
          value: [{ name: '迁入', value: 39 }, { name: '迁出', value: 28 }]
        },
        {
          name: '吉林',
          value: [{ name: '迁入', value: 41 }, { name: '迁出', value: 41 }]
        },
        {
          name: '黑龙江',
          value: [{ name: '迁入', value: 35 }, { name: '迁出', value: 31 }]
        },
        {
          name: '上海',
          value: [{ name: '迁入', value: 12 }, { name: '迁出', value: 12 }]
        },
        {
          name: '江苏',
          value: [{ name: '迁入', value: 47 }, { name: '迁出', value: 45 }]
        },
        {
          name: '浙江',
          value: [{ name: '迁入', value: 57 }, { name: '迁出', value: 57 }]
        },
        {
          name: '安徽',
          value: [{ name: '迁入', value: 57 }, { name: '迁出', value: 52 }]
        },
        {
          name: '福建',
          value: [{ name: '迁入', value: 59 }, { name: '迁出', value: 57 }]
        },
        {
          name: '江西',
          value: [{ name: '迁入', value: 49 }, { name: '迁出', value: 42 }]
        },
        {
          name: '山东',
          value: [{ name: '迁入', value: 67 }, { name: '迁出', value: 52 }]
        },
        {
          name: '河南',
          value: [{ name: '迁入', value: 69 }, { name: '迁出', value: 68 }]
        },
        {
          name: '湖北',
          value: [{ name: '迁入', value: 60 }, { name: '迁出', value: 56 }]
        },
        {
          name: '湖南',
          value: [{ name: '迁入', value: 62 }, { name: '迁出', value: 52 }]
        },
        {
          name: '重庆',
          value: [{ name: '迁入', value: 47 }, { name: '迁出', value: 44 }]
        },
        {
          name: '四川',
          value: [{ name: '迁入', value: 65 }, { name: '迁出', value: 60 }]
        },
        {
          name: '贵州',
          value: [{ name: '迁入', value: 32 }, { name: '迁出', value: 30 }]
        },
        {
          name: '云南',
          value: [{ name: '迁入', value: 42 }, { name: '迁出', value: 41 }]
        },
        {
          name: '西藏',
          value: [{ name: '迁入', value: 5 }, { name: '迁出', value: 4 }]
        },
        {
          name: '陕西',
          value: [{ name: '迁入', value: 38 }, { name: '迁出', value: 42 }]
        },
        {
          name: '甘肃',
          value: [{ name: '迁入', value: 28 }, { name: '迁出', value: 28 }]
        },
        {
          name: '青海',
          value: [{ name: '迁入', value: 5 }, { name: '迁出', value: 5 }]
        },
        {
          name: '宁夏',
          value: [{ name: '迁入', value: 10 }, { name: '迁出', value: 8 }]
        },
        {
          name: '新疆',
          value: [{ name: '迁入', value: 36 }, { name: '迁出', value: 31 }]
        },
        {
          name: '广东',
          value: [{ name: '迁入', value: 63 }, { name: '迁出', value: 60 }]
        },
        {
          name: '广西',
          value: [{ name: '迁入', value: 29 }, { name: '迁出', value: 30 }]
        },
        {
          name: '海南',
          value: [{ name: '迁入', value: 8 }, { name: '迁出', value: 6 }]
        }
      ]

      myChart.showLoading()
      var mapFeatures = this.$echarts.getMap(mapName).geoJson.features
      myChart.hideLoading()
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp
      })
      const max = 480
      const min = 9 // todo
      const maxSize4Pin = 100
      const minSize4Pin = 20

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      var option = {
        title: {
          text: nameTitle,
          subtext: subname,
          x: 'center',
          textStyle: {
            color: nameColor,
            fontFamily: nameFontFamily,
            fontSize: nameFontSize
          },
          subtextStyle: {
            fontSize: subnameFontSize,
            fontFamily: nameFontFamily
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            let toolTiphtml = ''
            if (typeof params.value[2] === 'undefined') {
              for (let i = 0; i < toolTipData.length; i++) {
                if (params.name === toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ':<br>'
                  for (let j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ':' +
                      toolTipData[i].value[j].value +
                      '<br>'
                  }
                }
              }
              return toolTiphtml
            } else {
              for (let i = 0; i < toolTipData.length; i++) {
                if (params.name === toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ':<br>'
                  for (let j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ':' +
                      toolTipData[i].value[j].value +
                      '<br>'
                  }
                }
              }
              return toolTiphtml
            }
          }
        },

        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ['#00467F', '#A5CC82'] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          }
        },
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9'
              }
            }
          },
          {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077'
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: data
          },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', // 气泡
            symbolSize: function (val) {
              var a = (maxSize4Pin - minSize4Pin) / (max - min)
              var b = minSize4Pin - a * min
              b = maxSize4Pin - a * max
              return a * val[2] + b
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#F62157' // 标志颜色
              }
            },
            zlevel: 6,
            data: convertData(data)
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value
                })
                .slice(0, 5)
            ),
            symbolSize: function (val) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: 'yellow',
                shadowBlur: 10,
                shadowColor: 'yellow'
              }
            },
            zlevel: 1
          }
        ]
      }
      var count = 0
      var timeTicket = null
      var dataLength = option.series[0].data.length
      timeTicket && clearInterval(timeTicket)
      timeTicket = setInterval(function () {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count % dataLength
        })
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count % dataLength
        })
        count++
      }, 1000)

      myChart.on('mouseover', function (params) {
        clearInterval(timeTicket)
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        })
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        })
      })
      myChart.on('mouseout', function (params) {
        timeTicket && clearInterval(timeTicket)
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
          })
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count % dataLength
          })
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count % dataLength
          })
          count++
        }, 1000)
      })
      myChart.setOption(option)

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
