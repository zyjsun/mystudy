<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
    <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi</router-link>
        <router-link :to="{name:'Hello/Hi/hi1',params:{username: 'zyj'}}">Hi1</router-link>
          <router-link to="/Hi/hi2">Hi2</router-link>
          <router-link to="/goHome">goHome</router-link>
          <router-link to="/goParams/918/zyj">goParams</router-link>
               <router-link to="/jspang">hi1</router-link>
               <transition name="fade" mode="out-in">
                 <router-view></router-view>
               </transition>
          </div>
          <p>{{$route.name}}</p>
  </div>
    
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
