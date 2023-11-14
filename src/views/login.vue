<template>
  <div class="login">
    <el-container>

      <el-header  height="250px"  class="el-header">
        <el-row >
          <el-col :span="2" class="logo">
            <div class="logo">helloword.ai</div>
          </el-col>
        </el-row>
      </el-header>

      <el-main >
        <el-row justify="center"  >
          <el-col :span="8" class="box" >
            <div class="content">
              <div class="input username">
                <span style="color: white" class="tishi">用户名NAME:</span>
                <input type="text" class="input" >
              </div>
              <div class="input username">
                <span style="color: white" class="tishi">密码PASSWORD:</span>
                <input type="password" class="input">
              </div>
            </div>

            <div class="end">
                <el-button type="primary" round class="btn" size="large">登录
                </el-button>
                <el-button type="primary" round class="btn" size="large">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>

    </el-container>


  </div>
</template>

<script >

</script>

<style >
.login{
  height: 100vh;
  background-color: white;
}
.box{
  width: 700px;
  height: 450px;
  background-color: rgba(5, 17, 33, 0.2);
  border-radius: 20px;
}

.el-header {
  display: flex;
  justify-content: center;
  align-items: end;
}
.logo{
  font-size: 50px;
  color: #081120;
  margin: 20px 0;

}
.input{
  height: 80px;
  width: 550px;
  border-radius: 20px;
  border: 0;
  margin: 30px 50px ;
  font-size: 20px;
  font-family: "微软雅黑 Light";
}
.input:focus {
  outline: 2px solid #619bf9; /* 红色实线轮廓 */
}
.btn{
  width: 400px;
  margin: 10px 10px;
  height: 50px;
}
.end{
display: flex;
flex-direction: column;
justify-content: end;
  align-items: center;
  margin-top: 60px;
}
.username{
  display: flex;
  align-items: center;
}
.tishi {
  color: white;
  font-size: 20px;
  width: 70px;
  margin-left: 20px;
  margin-right: 5px;
}

</style>