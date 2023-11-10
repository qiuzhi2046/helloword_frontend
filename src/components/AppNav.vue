
<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/tools">工具</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/study">学习</router-link>
    </el-menu-item>

    <el-menu-item index="3">社群</el-menu-item>
    <el-menu-item index="4">资讯</el-menu-item>
    <el-menu-item index="5" class="logo" style="margin: auto">
      <p>helloword.ai</p>
      <img src="src/assets/logo.svg" alt="logo" style="height: 20px">
    </el-menu-item>
  </el-menu>


</template>

<script>


export default {

}
</script>

<style >
.el-menu {
  background-color: #333; /* 暗色背景 */
  color: #fff; /* 白色文字 */
}

.el-menu-item:focus, .el-menu-item:hover {
  background-color: #555; /* 深灰色背景 */
}

</style>