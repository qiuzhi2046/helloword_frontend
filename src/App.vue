<template>
  <div id="app">

    <Banner/>
    <AppNav/>

    <div class="main-content">
      <SideNav/>
      <router-view class="router-content"></router-view>
    </div>
    <Footer class="app-footer"></Footer>
  </div>
</template>


<script >
import { RouterLink, RouterView } from 'vue-router'
import AppNav from "./components/AppNav.vue";
import SideNav from "./components/SideNav.vue";
import Banner from "./components/Banner.vue";
import Footer from "@/components/Footer.vue";


export default {
  components:{
   AppNav,SideNav,Banner,Footer
  },
  data(){
   return{

   }
  }
}
</script>


<style>
/* 用于设置整个应用的基本样式 */
.main-content {
  flex: 1; /* 占用所有可用空间，但不包括页脚 */
  display: flex;
  padding-bottom: 20px/* 页脚高度 */; /* 保留足够空间给页脚 */
  //overflow: auto;
}

.router-content {
  flex: 1; /* 占据剩余空间 */
  /* 根据需要添加额外的样式 */
  overflow: auto;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #333; /* 暗灰色文字 */
  background-color: #fff; /* 白色背景 */
}

/* Element UI 组件的全局自定义 */


/* 全局圆角 */
.el-menu, .el-menu-item, .el-aside, .el-carousel, .el-carousel-item {
  border-radius: 20px
}

.app-footer {
  /* 保证页脚始终在底部 */
  margin-top: 10px/* 根据需要调整 */;
  /* 其他样式 */
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>