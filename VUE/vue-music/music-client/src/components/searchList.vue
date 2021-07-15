<template>
  <div class="search-list">
    <transition-group tag="ul"
                      name="list">
      <li class="search-item"
          v-for="(item,index) in searches"
          :key="index">
        <span class="text"
              @click="search(item)">{{item}}</span>
        <span class="icon-box">
          <i class="icon"
             @click="remove(index)">&#xe656;</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    remove (e) {
      console.log(e)
      this.$store.dispatch('removeHistoryList', e)
    },
    search (e) {
      this.$emit('query', e)
    }
  }
}
</script>

<style lang="less" scoped>
.search-list {
  .search-item {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: hidden;

    &.list-enter-active,
    &.list-leave-active {
      transition: all 0.1s;
    }

    &.list-enter,
    &.list-leave-to {
      height: 0;
    }

    .text {
      flex: 1;
      color: hsla(0, 0%, 100%, 0.5);
    }

    .icon-box {
      .icon {
        font-size: 18px;
        color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }
}
</style>