<template>
  <div class="wrapper">
    <div class="header">我的</div>
    <div class="myinfo">
      <div class="left">
        <img src="../assets/logo.png"
             alt="">
      </div>
      <div class="right">
        <div class="name">

        </div>
        <div class="signName">

        </div>
      </div>
    </div>
    <div class="myCreate">我发表的</div>
    <div class="save">我的收藏</div>
  </div>
  <b-footer></b-footer>
</template>

<script>
import buttom from '../components/Footer.vue'
export default {
  components: {
    "b-footer": buttom
  }
}
</script>

<style lang="less">
.wrapper {
  width: 100px;
  margin: 0 auto;
  .header {
    width: 100%;
    height: 40px;
    color: #fff;
    text-align: center;
    background-color: yellowgreen;

    padding-top: 10px;
    z-index: 100;
    font-size: 20px;
    overflow: hidden;
  }
  .myinfo {
    width: 100%;
    height: 200px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    border-radius: 30px;
    border: 10px;
    box-shadow: 7px 7px 10px #ececec;
    background: rgb(243, 239, 239);
    z-index: 1000;
    .left img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>