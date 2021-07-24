<template>
  <div class="wrap">
    <div class="menu-wrap">
      <div class="menu-item"
           v-for="menuItem in data"
           :key="menuItem.id"
           :class="getActiveClass(menuItem.id)"
           @click="onMenuItemClick(menuItem.id)">{{menuItem.name}}</div>
    </div>

    <cascader-menu v-if="subMenu&&subMenu.length"
                   :data="subMenu"
                   :activeIds='activeIds'
                   :depath='newDepth'></cascader-menu>
  </div>
</template>

<script lang="ts">
import { ref, watch, reactive, computed } from "@vue/runtime-core";
import data from "../../public/test.js";
interface IProps {
  data: typeof data;
  activeIds?: number[];
  depath: number;
}

export default {
  props: ["data", "activeIds", "depath"],
  setup(props: IProps, context) {
    const { data, activeIds, depath = 0 } = reactive(props);
    const activeId = ref<number | null | undefined>(null);

    watch(
      () => activeIds,
      (newActiveIds) => {
        if (newActiveIds) {
          const newActiveId = newActiveIds[depath];
          if (newActiveId) {
            activeId.value = newActiveId;
          }
        }
      },
      {
        immediate: true,
      }
    );
    const getActiveClass = (id: number) => {
      if (id === activeId.value) {
        return "menu-active";
      }
      return "";
    };

    const newDepth = ref(depath + 1);
    const getActiveSubMenu = () => {
      return data?.find(({ id }) => id === activeId.value)?._child;
    };
    const subMenu = computed(getActiveSubMenu);
    const onSubActiveChange = (ids) => {
      context.emit("change", [activeId.value].concat(ids));
    };
    const onMenuItemClick = (menuItem) => {
      const newActiveId = menuItem;
      if (newActiveId !== activeId.value) {
        activeId.value = newActiveId;
      }
    };
    return {
      activeId,
      getActiveClass,
      subMenu,
      onSubActiveChange,
      newDepth,
      onMenuItemClick,
    };
  },
};
</script>

<style>
.wrap {
  padding: 12px 0;
}

.menu-wrap {
  display: flex;
  flex-wrap: wrap;
}

.menu-wrap-0 {
  background: #ffccc7;
}

.menu-wrap-1 {
  background: #fff7e6;
}

.menu-wrap-2 {
  background: #fcffe6;
}

.menu-item {
  margin-left: 16px;
  cursor: pointer;
  white-space: nowrap;
}

.menu-active {
  color: #f5222d;
}
</style>