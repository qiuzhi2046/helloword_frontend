<template>
  <div id="app">
<!--这里是el的布局容器，整个app都在这里面-->
    <el-container>
<!--      这里是有个置顶logo-->

            <AppNav></AppNav>


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
import AppNav from "@/components/AppNav.vue";


export default {
  components:{
Footer,login,home,sign,AppNav
  },
  data(){
    return{
      is_login:true,
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

}


</style>