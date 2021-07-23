<template>
  <cascader-menu :data="data"
                 :activeids="ids"></cascader-menu>
</template>

<script>
import { defineComponent } from "vue";
import cascaderMenu from "./components/CascaderMenu.vue";
import data from "../public/test.js";
import { ref } from 'vue'

export default defineComponent({
  name: "App",
  setup () {
    const activeId = 8
    const findPath = (menus, targetId) => {
      let ids;
      const traverse = (subMenu, pre) => {
        if (ids || !subMenu) return
        subMenu.forEach(subMenu => {
          if (subMenu.id === activeId) {
            ids = [...pre, targetId]
            return
          }
          traverse(subMenu._child, [...pre, subMenu.id])
        });
      }

      traverse(menus, [])
      return ids
    }
    const ids = ref(findPath(data, activeId))
    return {
      data,
      ids
    };
  },
  components: {
    cascaderMenu,
  },
});
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
