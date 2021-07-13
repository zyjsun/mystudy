<template>
  <div class="sidebar"
       :class="{showbar: showSidebar}">
    <div class="sidebar-con"
         :class="{showbar: showSidebar}">
      <div class="head">
        <div class="avatar">
          <img src="https://avatar-static.segmentfault.com/561/990/561990135-57d0e6353f822_huge256"
               alt>
        </div>
        <div class="name">hzzly</div>
      </div>
      <div class="menu">
        <ul>
          <li @click="_hidebar">
            <router-link to="/user"
                         @click="_hidebar">
              <i class="icon">&#xe63c;</i>
              <span>个人中心</span>
            </router-link>
          </li>
          <li @click="showToast">
            <router-link to>
              <i class="icon">&#xe631;</i>
              <span>音效调整</span>
            </router-link>
          </li>
          <li @click="showToast">
            <router-link to>
              <i class="icon">&#xe65b;</i>
              <span>定时关闭</span>
            </router-link>
          </li>
          <li @click="showToast">
            <router-link to>
              <i class="icon">&#xe601;</i>
              <span>听歌识曲</span>
            </router-link>
          </li>
          <li @click="showToast">
            <router-link to>
              <i class="icon">&#xe600;</i>
              <span>帮助</span>
            </router-link>
          </li>
          <li @click="showToast">
            <router-link to>
              <i class="icon">&#xe61f;</i>
              <span>设置</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="showSidebar"
         class="sidebar_mask"
         @click="_hidebar"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data () {
    return {
    }
  },
  // props: ['isopen'],
  computed: {
    ...mapGetters(["showSidebar"])
  },
  methods: {
    showToast () {
      this.$toast('开发中，敬请期待...', 'bottom')
    },
    _hidebar () {
      this.$store.dispatch("setShowSidebar", false);
    }
  }
}
</script>
<style lang="less">
@import "../assets/css/function.less";
.sidebar {
  color: #e8e8e8;
  .sidebar-con {
    background: #040308;
    position: absolute;
    top: 0;
    .px2rem(left, -400);
    transform: translateZ(0);
    opacity: 0;
    .px2rem(width, 350);
    z-index: 1002;
    height: 100%;
    overflow: auto;
    transition: all 0.3s ease;

    &.showbar {
      transform: translateX(200px);
      opacity: 1;
    }
    .head {
      text-align: center;
      .avatar {
        .px2rem(width, 90);
        .px2rem(height, 90);
        background: #f1f1f1;
        border-radius: 50%;
        margin: 0 auto;
        .px2rem(margin-top, 60);
        .px2rem(margin-bottom, 60);
        img {
          width: 100%;
        }
      }
      .name {
        .px2rem(font-size, 32);
      }
    }
    .menu {
      .px2rem(margin-top, 30);
      ul {
        li {
          .px2rem(height, 90);
          .px2rem(line-height, 90);
          a {
            display: block;
            .px2rem(padding-left, 60);
            .icon {
              .px2rem(font-size, 36);
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
              .px2rem(font-size, 24);
              .px2rem(padding-left, 20);
              color: #fff;
            }
          }
          &:hover {
            .icon,
            span {
              color: #902444;
            }
          }
        }
      }
    }
  }
  .sidebar_mask {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>