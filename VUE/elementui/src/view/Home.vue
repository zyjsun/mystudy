<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">旅梦管理系统</div>
        <div class="info">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{user}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <!-- 左侧菜单 -->
            <el-menu 
            default-active="/Home/userinfo"
             class="el-menu-vertical-demo" 
             background-color="#B3C0D1"
             router>
  <el-submenu index="1" > 
      <!-- 超级菜单 -->
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>学生列表</span>
    </template>
    <el-menu-item index="/Home/userinfo">
        <i class="el-icon-menu"></i>
        <span slot="title">杨总</span>
    </el-menu-item>

    <el-menu-item index="userinfo2">
        <i class="el-icon-menu"></i>
        <span slot="title">张总</span>
    </el-menu-item>

    <el-menu-item index="1-1">
        <i class="el-icon-menu"></i>
        <span slot="title">李总</span>
    </el-menu-item>
  </el-submenu>

  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">作业情况</span>
  </el-menu-item>
  
</el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              user: this.$route.query.user
          }
      }
  }
</script>

<style>
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .is-vertical .el-container {
    height: calc(100vh - 60px);
  }
  .title{
    float: left;
  }
  .info{
    float: right;
  }
  .el-menu{
      height: 100%;
      
  }
</style>