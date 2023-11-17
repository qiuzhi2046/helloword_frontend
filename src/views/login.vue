<template>
  <div class="login">
    <el-container>

      <el-header  height="250px"  class="el-header">
        <el-row >
          <el-col :span="2" class="logo">
            <div class="logo" >Helloword.ai</div>
          </el-col>
        </el-row>
      </el-header>

      <el-main >
        <el-row justify="center"  >
          <el-col :span="8" class="box" >
            <div class="content">
                <input type="text" class="input" placeholder="手机号码或电子邮件">
                <input type="password" class="input" placeholder="密码">
            </div>

            <div class="end">
              <div>
                <input type="checkbox" class="reminder_pdw" > <span style="font-size: 15px ;color: gray">记住我的密码</span>
              </div>
              <el-row>
                <el-col :span="18">
                  <el-button color="#026eda" round class="btn" size="large">立即登录
                  </el-button>
                </el-col>
              </el-row>

              <div class="sign_in">
                <div class="forget_div">
                <router-link to="/" class="forget"> &nbsp&nbsp&nbsp&nbsp忘记了密码？</router-link> <span> &#8599;</span>
                </div>
                <div>
                <span>没有helloword账号？</span> <span @click="go_sign" href="" class="create_account">创建你的helloword账号</span> <span> &#8599;</span>
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
export default {
  methods:{
    go_sign(){
      this.$emit('go_sign',true)
    }
  }

}

</script>

<style >
.login{
  height: 500px;
  width: 100%;
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
  border-radius: 16px;
  border: 0.8px solid #989595;
  font-size: 15px;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  display: flex;
  justify-content: center;
  padding-left: 40px;
}
.input:focus {
  outline: 5px solid #026eda; /* 红色实线轮廓 */
  border: 2.5px solid #026eda;
}
input::placeholder {
  color: gray;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding-left: 0;
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
.create_account {
  color: #06c;
  cursor: pointer;
}

.create_account:hover {
  color: #039;
  text-decoration: none;
}


</style>