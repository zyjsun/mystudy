<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li"
                   class="nav-list-item active"
                   to="/">
        &#xe659;
        <span>游记</span>
      </router-link>
      <router-link tag="li"
                   class="nav-list-item"
                   to="add">
        +
        <span>添加</span>
      </router-link>
      <router-link tag="li"
                   class="nav-list-item"
                   to="user">
        &#xe600;
        <span>我的</span>
      </router-link>
    </ul>
  </div>

</template>

<script>

export default {

}
</script>

<style lang="less">
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: rgba(255, 197, 61, 100);
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>