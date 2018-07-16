<template>
  <div class="startrcharts">
    <div class="box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightbox',
  data () {
    return {
      // 初始化 EX:isCollapse: false
    }
  },
  mounted () {
    // 方法调用
  },
  methods: {
    // 方法
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background:url('../assets/img/vuezxhy.jpg') no-repeat;
  text-align:center;
  background-size:cover;
}
.text_hy{
  position:absolute;
  right:10%;
  top:40%;
  font-size:26px;
  font-family: "微软雅黑";
  font-weight:bold;
  color:#fff;
}
</style>
