<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="countLoginForm"
      status-icon
      :rules="rules"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="countLoginForm.account" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="countLoginForm.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import LocalCache from '@/utils/cache'
// 将验证规则抽离出去
import { rules } from '../config/account-config.ts'
// 导入pinia
import { useLoginStore } from '@/store/login/loginStore'

const loginStore = useLoginStore()

export interface ExposeFuncType {
  rememberPassword: () => void
  loginAction: () => void
  echoFormData: () => void
  countLoginForm: {
    account: string
    password: string
  }
}
const countLoginForm = reactive({
  account: '',
  password: ''
})
// 新的获取实例的方法
const ruleFormRef = ref<FormInstance>()

const echoFormData = () => {
  countLoginForm.account = LocalCache.getCache('account')
  countLoginForm.password = LocalCache.getCache('password')
}

const rememberPassword = () => {
  LocalCache.setCache('account', countLoginForm.account)
  // 真实开发需要进行加密
  LocalCache.setCache('password', countLoginForm.password)
  LocalCache.setCache('isKeepPassword', true)
}

const loginAction = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log('真正执行的登录逻辑')
      loginStore.accountLoginAction({
        name: countLoginForm.account,
        password: countLoginForm.password
      })
    } else {
      console.log('验证失败')
    }
  })
}
// 将组件方法导出去
defineExpose({
  loginAction,
  rememberPassword,
  echoFormData,
  countLoginForm
})
</script>

<style lang="less" scoped></style>
@/src/store/login/loginStore.ts
