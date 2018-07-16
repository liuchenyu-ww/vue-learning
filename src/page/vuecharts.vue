<template>
  <div class="vue_charts">
    <div class="header_nav">
      Charts-中兴华易应用平台
    </div>
    <div class="nav_box">
      <div>
        <el-menu style="border:0;" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#202221" text-color="#fff" active-text-color="#ffd04b">
          <router-link to="/">
            <el-menu-item index="0">
              <i class="el-icon-setting"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">柱状图</span>
            </template>
            <el-menu-item-group>
              <router-link to="/barbasics">
                <el-menu-item index="1-1">柱状图基础扩展</el-menu-item>
              </router-link>
              <router-link to="/barexample">
                <el-menu-item index="1-2">柱状图实例扩展</el-menu-item>
              </router-link>
              <router-link to="/barstyle">
                <el-menu-item index="1-3">柱状图样式扩展</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">堆积柱状图</span>
              <router-link to="/baraccumulation">
                <el-menu-item index="1-4-1">样式扩展</el-menu-item>
              </router-link>
              <router-link to="/baraccumulationbasics">
                <el-menu-item index="1-4-2">基础扩展</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">折线图</span>
            </template>
            <el-menu-item-group>
              <router-link to="/linebasics">
                <el-menu-item index="2-1">折线图基础扩展</el-menu-item>
              </router-link>
              <router-link to="/lineexample">
                <el-menu-item index="2-2">折线图实例扩展</el-menu-item>
              </router-link>
              <router-link to="/linestyle">
                <el-menu-item index="2-3">折线图样式扩展</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <span slot="title">面积折状图</span>
              <router-link to="/lineaccumulation">
                <el-menu-item index="2-4-1">基础扩展</el-menu-item>
              </router-link>
              <router-link to="/lineaccumulationbasics">
                <el-menu-item index="2-4-2">样式扩展</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">地图</span>
            </template>
            <el-menu-item-group>
              <router-link to="/mapextend">
                <el-menu-item index="3-1">地图扩展</el-menu-item>
              </router-link>
              <router-link to="/maptransfer">
                <el-menu-item index="3-2">迁移图</el-menu-item>
              </router-link>
              <router-link to="/mappunctuation">
              <el-menu-item index="3-3">地图标点</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <!-- <el-submenu index="3-4">
              <span slot="title">面积折状图</span>
              <el-menu-item index="3-4-1">面积折状图1</el-menu-item>
              <el-menu-item index="3-4-2">面积折状图2</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <router-link to="/aboutus">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">关于平台</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </div>
    </div>
    <div class="right_box">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vuecharts',
  data () {
    return {
      isCollapse: false
    }
  },
  mounted () {
    console.log('4-mounted 被创建')
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.header_nav{
  float:left;
  background:#fff;
  height:50px;
  line-height:50px;
  padding-left:20px;
  box-sizing:border-box;
  color:#2295F2;
  font-family: "微软雅黑";
  font-weight:bold;
  z-index:10;
  position:relative;
  width:100%;
  border-top:2px solid #2295f2;
}
.nav_box{
  position:absolute;
  top:0;
  width:200px;
  bottom:0;
  background:#202221;
  padding:60px 0 0 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.nav_box::-webkit-scrollbar {
  width: 2px;
}
.nav_box::-webkit-scrollbar-track {
  background-color:666;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
.nav_box::-webkit-scrollbar-thumb {
  background-color:#2295f2;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
.right_box{
  position:absolute;
  right:0;
  bottom:0;
  top:50px;
  left:200px;
}
</style>
