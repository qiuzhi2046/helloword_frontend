
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
      <img src="../assets/img/logo.svg" alt="logo" style="height: 20px">
    </el-menu-item>
    <el-menu-item index="6" class="logo" style="">
      <a href="" @click="showLoginModal">登录</a>
    </el-menu-item>
  </el-menu>


</template>

<script>


export default {
components:{

},
  data() {
    return {
      isLoginModalVisible: false
    };
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    }
  }
}
</script>

<style >



</style>