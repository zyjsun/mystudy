<template>
  <div class="login">
      <div class="login-container">
          <h2>旅梦后台管理系统</h2>
          <div class="wrap">
              <el-input v-model="userName" placeholder="请输入账号"></el-input>
              <el-input placeholder="请输入密码" v-model="passWord" show-password></el-input>
              <el-button type="primary" @click="check">登录</el-button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
        userName: '',
        passWord: ''
        }
    },
    methods:{
        check(){
            if(this.userName==="admin"&&this.passWord==="123456"){
                this.$router.push({path:'/Home',query: {user: this.userName}})
                // params 传参要有name 刷新不会保存
            }else{
                this.$message.error('账号或密码错误')
            }
        }
    }
}
</script>

<style>
.login{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.login-container{
    width: 400px;
    height: 360px;
    box-shadow: 0 0 5px #999;
    border-radius: 5px;
    text-align: center;
}
.wrap{
    padding: 10px 50px;
}
.el-input{
    margin: 10px;
}
.el-button {
    width: 100%;
    color:royalblue;
}
</style>
