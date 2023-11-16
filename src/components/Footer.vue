<template>
  <div class="footer">


    <div class="footer-content">
      <!-- Footer sections can go here -->
      <div class="footer-section">
        <p>联系方式</p>
        <p>Email: contact@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div class="footer-section">
        <p>感谢方</p>
        <p>Vue Community</p>
        <p>Open Source Contributors</p>
      </div>
      <div class="footer-section">
        <p>资源来源</p>
        <p>Vue.js Official</p>
        <p>Vite.js</p>
      </div>
      <div class="footer-section">
        <p>其他信息</p>
        <p>隐私政策</p>
        <p>条款与条件</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © helloword.ai版权所有 | 京ICP备17072161号-1</p>
    </div>

  </div>
</template>

<style >
.footer {
  color: #5b5a5a; /* 黑灰色 */
  text-align: center;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding-top: 15px;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;

}

.footer-content {
  display: flex;

  justify-content: space-around;
  margin-bottom: 30px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 15px;
  color: #3f3d3d;
}

.footer-section p {
  margin: 0;
  padding: 0;
  font-size: 12px;
}

.footer-bottom {
  font-size: 0.7em;
  padding: 5px;
}
</style>

