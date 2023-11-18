
<template>
  <div id="home">
    <el-container>

<el-header height="auto">
  <div class="search">
    <search></search>
  </div>
</el-header>

      <el-container>
<!--        <el-aside  >-->
          <div class="sidenav">
            <SideNav> </SideNav>
          </div>
<!--        </el-aside>-->

        <el-main>
          <tools></tools>
        </el-main>
      </el-container>
    </el-container>




    </div>


</template>


<script >
import tools from "@/views/tools.vue";
import search from "../components/search.vue";
import SideNav from "@/components/SideNav.vue";





export default {
  components:{
    search, tools,SideNav
  },
  data(){
    return{

    }
  }
}
</script>


<style>
.sidenav{
  height: 100%;
  background-color: #f5f5f5;
  position: sticky;
  top: 0;
  border: #f8f8f8 solid 2px;
}


</style>