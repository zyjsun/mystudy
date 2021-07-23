<template>
  <div class="wrap">
    <div class="menu-wrap">
      <div class="menu-item">生命科学</div>
    </div>
    <cascader-menu v-if="false"></cascader-menu>
  </div>
</template>

<script lang='ts'>
import data from "../../public/test.js";
import { ref, watch } from "vue";
interface IProps {
  data: typeof data;
  activeIds?: number[];
  depath: number;
}
export default {
  props: ["data", "activeIds", "depath"],
  setup(props: IProps) {
    const { data, activeIds, depath = 0 } = props;
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
    return {
      activeId,
      depath,
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
