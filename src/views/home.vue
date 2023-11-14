
<template>
  <div id="home">

    <!--  登录展示这个-->

      <Banner/>
      <AppNav/>
      <div class="main-content">
        <SideNav/>

      </div>
      <Footer class="app-footer"></Footer>
    </div>


</template>


<script >

import AppNav from "@/components/AppNav.vue";
import SideNav from "@/components/SideNav.vue";
import Banner from "@/components/Banner.vue";
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


</style>