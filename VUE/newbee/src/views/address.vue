<template>
  <sHeader name="新增地址"></sHeader>
  <van-address-edit class="edit"
                    :area-list="areaList"
                    :address-info="addressInfo"
                    :show-delete="type == 'edit'"
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete" />
</template>

<script>

import sHeader from '@/components/SimpleHeader'

export default {
  components: {
    sHeader
  },
}
</script>

<style lang="less">
@import "../common/style/mixin";
.edit {
  .van-field__body {
    textarea {
      height: 26px !important;
    }
  }
}
.address-edit-box {
  .van-address-edit {
    .van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>