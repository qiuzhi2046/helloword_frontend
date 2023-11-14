<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Footer sections can go here -->
      <div class="footer-section">
        <h4>联系方式</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div class="footer-section">
        <h4>感谢方</h4>
        <p>Vue Community</p>
        <p>Open Source Contributors</p>
      </div>
      <div class="footer-section">
        <h4>资源来源</h4>
        <p>Vue.js Official</p>
        <p>Vite.js</p>
      </div>
      <div class="footer-section">
        <h4>其他信息</h4>
        <p>隐私政策</p>
        <p>条款与条件</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © helloword.ai版权所有 | 京ICP备17072161号-1</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #333; /* 黑灰色 */
  text-align: center;
  padding: 0 0;
  bottom: 0;
  width: 100%;

}

.footer-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section p {
  margin: 0;
  padding: 0;
}

.footer-bottom {
  font-size: 0.8em;
  padding: 5px;
  background-color: antiquewhite;
}
</style>

