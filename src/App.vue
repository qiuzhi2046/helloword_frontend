<template>
  <div id="app">

    <el-container>
      <el-header>Header</el-header>

      <el-main>Main</el-main>

      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>


  </div>

</template>


<script >
import footer from "@/components/Footer.vue"


export default {
  components:{
footer
  },
  data(){
    return{

    }
  }
}
</script>


<style>




</style>