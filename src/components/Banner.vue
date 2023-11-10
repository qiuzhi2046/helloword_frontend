

<template>
  <el-carousel interval="5000" type="card" height="200px">
    <el-carousel-item v-for="item in banners" :key="item.id">
      <h3>{{ item.title }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script >
export default {
  data() {
    return {
      banners: [
        { id: 1, title: 'Banner 1' },
        { id: 2, title: 'Banner 2' },
        { id: 3, title: 'Banner 3' }
      ]
    }
  }
}
</script>

<style >
.el-carousel {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* 轻微阴影 */
}

.el-carousel-item h3 {
  color: #fff; /* 白色文字 */
  background-color: #333; /* 暗色背景 */
  border-radius: 10px; /* 圆角 */
  text-align: center;
  line-height: 200px; /* 让文字垂直居中 */
}
</style>