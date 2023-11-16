<template>
  <div id="app">
<!--这里是el的布局容器，整个app都在这里面-->
    <el-container>
<!--      这里是有个置顶logo-->
      <el-header>
        <el-row justify="center"> <!--  justify=控制这个标签内的子标签的对齐  -->
            <div>helloword.ai</div>
        </el-row>
      </el-header>

<!--这里是主要的登录页面-->
      <el-main height="800px">
        <home v-if="is_login"></home>
        <login  v-else-if="show_login" @go_sign="handle_go_sign"></login>
        <sign v-else></sign>

      </el-main>

      <el-footer  >
          <el-row justify="center">
            <el-col :span="24" >
              <Footer ></Footer>
            </el-col>
          </el-row>
      </el-footer>

    </el-container>


  </div>

</template>


<script >
import Footer from "@/components/Footer.vue"
import home from "@/views/home.vue"
import login from "@/views/login.vue"
import sign from "@/views/sign.vue"


export default {
  components:{
Footer,login,home,sign
  },
  data(){
    return{
      is_login:false,
      show_login:true,
    }
  },
  methods:{
    handle_go_sign(){
      this.show_login=false
    }
  }
}
</script>


<style>
#app{
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使容器占满整个视口高度 */
}

el-main {
  flex-grow: 1; /* 使主内容区域占据所有可用空间 */
}

</style>