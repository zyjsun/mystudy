<template>

  <el-form status-icon
           label-width="100px"
           class="login-form">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password"
                v-model="form.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup  lang="ts">
// import { ElButton } from 'element-plus'
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
interface Form {
  name: number;
  pwd: string;
}
const store = useStore();
const form = reactive<Form>({
  name: 1,
  pwd: "",
});
const handleClick = () => {
  store.commit("add");
};
</script>

<style>
.login-form {
  margin: 200px auto;
  width: 500px;
}
</style>