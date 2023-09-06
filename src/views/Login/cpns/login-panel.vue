<!-- 登录面板组件 -->
<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" @tab-change="changeTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="account"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="remember_forget">
      <el-checkbox
        label="记住密码"
        :checked="isKeepPassword"
        v-model="isKeepPassword"
        @change="rememberPassword"
      />
      <el-link :underline="true">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import loginAccount, { ExposeFuncType } from '@/views/Login/cpns/login-account.vue'
import loginPhone from '@/views/Login/cpns/login-phone.vue'
import type { CheckboxValueType, TabPaneName } from 'element-plus'
import { ref, onMounted } from 'vue'
import LocalCache from '@/utils/cache'

const currentTab = ref<TabPaneName>('account')

const changeTab = (name: TabPaneName) => {
  currentTab.value = name
}

// const account = ref<InstanceType<typeof loginAccount>>()
const account = ref<ExposeFuncType>()

const isKeepPassword = ref(false)
onMounted(() => {
  isKeepPassword.value = LocalCache.getCache('isKeepPassword') || false
  if (isKeepPassword.value) {
    account.value?.echoFormData()
  }
})
// 记住密码
const rememberPassword = (e: CheckboxValueType) => {
  if (e) {
    if (!account.value?.countLoginForm.password && !account.value?.countLoginForm.account) return
    account.value?.rememberPassword()
  }
}
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    account.value?.loginAction()
  } else {
    // 执行手机登录逻辑
    console.log('调用手机登录逻辑')
  }
  console.log(account.value, '***')
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
    height: 60px;
  }
  .remember_forget {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
