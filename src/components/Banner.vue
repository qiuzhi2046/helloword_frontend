

<template>
  <el-carousel interval="5000" type="card" height="200px">
    <el-carousel-item v-for="item in banners" :key="item.id">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>



</template>

<script >
export default {
  data() {
    return {
      banners: [
        { id: 1, title: 'Banner 1' ,url:'src/assets/img/banner1.jpg'},
        // { id: 2, title: 'Banner 2' ,url: 'src/assets/img/banner2.jpg'},
        // { id: 3, title: 'Banner 3' ,url: 'src/assets/img/banner3.jpg'}
      ]
    }
  }
}
</script>

<style >


</style>