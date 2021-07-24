<template>
  <cascader-menu :data="data"
                 :activeIds='ids'
                 @change="onSubActiveChange"></cascader-menu>
</template>

<script lang='js'>
import CascaderMenu from './components/CascaderMenu.vue'
import data from '../public/test.js'
import { ref } from 'vue'
export default {
  name: 'App',
  setup () {
    const activeId = 8

    const findPath = (menus, targetId) => {
      let ids;
      const traverse = (subMenus, prev) => {
        if (ids) {
          return
        }
        if (!subMenus) {
          return
        }
        subMenus.forEach(subMenu => {
          if (subMenu.id === targetId) {
            ids = [...prev, targetId]
            console.log(ids)
            return
          }
        
          traverse(subMenu._child, [...prev, subMenu.id])
        });
      }
      traverse(menus, [])
      return ids
    }

    const ids = ref(findPath(data, activeId))
    return {
      data,
      ids
    }
  },
  components: {
    CascaderMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>