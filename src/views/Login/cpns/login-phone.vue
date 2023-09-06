<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="phoneLoginForm"
      status-icon
      :rules="phoneLoginFormRules"
      label-width="65px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机" prop="phoneNumber">
        <el-input v-model="phoneLoginForm.phoneNumber" type="phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <div class="get-code">
          <el-input v-model="phoneLoginForm.verificationCode" type="text" autocomplete="off" />
          <el-button class="get-code-btn" type="primary" @click="getCode">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { phoneLoginFormRules } from '../config/account-config.ts'
const phoneLoginForm = reactive({
  phoneNumber: '',
  verificationCode: ''
})
const getCode = () => {
  console.log('获取验证码')
}
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .get-code-btn {
    margin-left: 5px;
  }
}
</style>
