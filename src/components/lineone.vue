<template>
  <div class="vue_charts">
    <div class="box">
      <div id="main" style="width:90%;height:88%;"></div>
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
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
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
}
</style>
