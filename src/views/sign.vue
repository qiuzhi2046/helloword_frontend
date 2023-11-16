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
              <input type="text" class="input" placeholder="手机号码或电子邮件">
              <input type="password" class="input" placeholder="注册邀请码">
            </div>

            <div class="end">
              <el-row>
                <el-col :span="18">
                  <el-button color="#026eda" round class="btn" size="large">立即注册
                  </el-button>
                </el-col>
              </el-row>

              <div class="sign_in">

                <div>
                  <span>没有helloword注册邀请码？</span><a href="" class="create_account">申请你的helloword邀请码</a> <span> &#8599;</span>
                </div>
              </div>
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
  background-color: white;
  border-radius: 20px;
}

.el-header {
  display: flex;
  justify-content: center;
  align-items: end;
}
.logo{
  font-size: 50px;
  color: black;
  margin: 20px 0;

}
.input{
  height: 60px;
  border-radius: 15px;
  border: 0.8px solid black;
  font-size: 15px;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding-left: 40px;
}
.input:focus {
  outline: 1px solid #026eda; /* 红色实线轮廓 */

}
input::placeholder {
  color: gray;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding-left: 0px;
}
input:focus::placeholder {
  color: white; /* 或任何其他颜色 */
}

.btn{
  margin: 10px 10px;
  height: 50px;
  border: 0;
}
.content{
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.reminder_pdw{
  margin-top: 25px;
  font-size: 15px;
  color: gray;
}
.end{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.sign_in{
  margin-top: 20px;
  font-size: 14px;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forget{
  margin-bottom: 5px;
}
a{
  color: #06c;
  text-decoration: none;
}
.forget_div{
  margin-bottom: 5px;
}



</style>