<template>
  <div class="vue_charts">
    <div class="box">
      <p>关于应用平台</p>
      <p style="color: #bbbebd;font-size:12px;">本应用前台技术栈:Vue2 + ElementUI + JQuery + Echarts</p>
      <p class="aboutustext" style="color:#666;">你可以通过以下几种方式获取 ECharts。
      <p class="aboutustext">从官网下载界面选择你需要的版本下载，根据开发者功能和体积上的需求，我们提供了不同打包的下载，如果你在体积上没有要求，可以直接下载完整版本。开发环境建议下载源代码版本，包含了常见的错误提示和警告。</p>
      <p class="aboutustext">在 ECharts 的 GitHub 上下载最新的 release 版本，解压出来的文件夹里的 dist 目录里可以找到最新版本的 echarts 库。</p>
      <p class="aboutustext">通过 npm 获取 echarts，npm install echarts --save，详见"在 webpack 中使用 echarts"</p>
      <p class="aboutustext">cdn 引入，你可以在 cdnjs，npmcdn 或者国内的 bootcdn 上找到 ECharts 的最新版本。</p>
      <p></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;">引入 ECharts</p>
      <p class="aboutustext">ECharts 3 开始不再强制使用 AMD 的方式按需引入，代码里也不再内置 AMD 加载器。因此引入方式简单了很多，只需要像普通的 JavaScript 库一样用 script 标签引入。</p>
      <p class="aboutustext" style="color:#666;margin-top:30px;">在 webpack 中使用 ECharts</p>
      <p class="aboutustext">Webpack 是目前比较流行的模块打包工具，你可以在使用 webpack 的项目中轻松的引入和打包 ECharts，这里假设你已经对 webpack 具有一定的了解并且在自己的项目中使用。</p>
      <p class="aboutustext" style="color:#666;margin-top:30px;">npm 安装 ECharts</p>
      <p class="aboutustext">在 3.1.1 版本之前 ECharts 在 npm 上的 package 是非官方维护的，从 3.1.1 开始由官方 EFE 维护 npm 上 ECharts 和 zrender 的 package。</p>
      <p class="aboutustext" style="color:#666;margin-top:30px;">你可以使用如下命令通过 npm 安装 ECharts</p>
      <p class="aboutustext" style="color:#2295f2;margin-top:30px;">npm install echarts --save</p>
      <p class="aboutustext" style="color:#666;margin-top:30px;">常用技术文档</p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://echarts.baidu.com/api.html#echarts">百度Echarts API →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://echarts.baidu.com/option.html#title">百度Echarts 配置项 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://cn.vuejs.org/v2/guide/">Vue2 中文文档 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://element-cn.eleme.io/#/zh-CN">ElementUI →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://v-charts.js.org/#/">V-Charts 官方文档 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://www.runoob.com/vue2/vue-tutorial.html">Vue 新手文档 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://echarts.baidu.com/examples/">百度Echarts 官网实例 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://efe.baidu.com/tags/ECharts/">百度Echarts 社区博客 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://www.csdn.net/">CSDN IT技术网站 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://juejin.im/welcome/frontend">掘金社区 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://www.cnblogs.com/">博客园 IT技术社区 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="http://www.iconfont.cn/">阿里巴巴矢量图库 →</a></p>
      <p class="aboutustext" style="color:#666;margin-top:30px;"><a style="color:#2295f2;" href="https://github.com/AiLuoLiuCenYu/vue-learning">本应用开发者-刘建平 Github地址 →</a></p>
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
  },
  methods: {
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
  text-align:center;
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 8px;
}
.box::-webkit-scrollbar-track {
  background-color:666;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
.box::-webkit-scrollbar-thumb {
  background-color:#2295f2;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
#main {
  margin: 3% auto;
}
.aboutustext{
  color: #bbbebd;
  font-size:12px;
  padding: 0 80px;
  text-align:left;
}
</style>
