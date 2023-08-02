<template>
  <div class="header-container">
    <div class="switch">
      <el-switch v-model="isFold" @change="clickSwitch"></el-switch>
      <div class="bread"></div>
    </div>
    <div class="header-right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link dropdown">
          <el-avatar :size="30" :src="circleUrl" />
          <span class="userName">{{ loginStore.userInfo.name }}</span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from '@/store/loginStore'
const loginStore = useLoginStore()
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const emits = defineEmits(['handleSwitch'])
const isFold = ref(false)
const clickSwitch = (state: boolean) => {
  emits('handleSwitch', state)
}
const handleCommand = () => {}
// 退出登录
const handleExitClick = () => {
  loginStore.exitCountAction()
}
</script>

<style lang="less" scoped>
.header-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dropdown {
    display: flex;
    align-items: center;
    .userName {
      margin-left: 5px;
    }
    .dropdown-item {
      vertical-align: center;
    }
  }
}
</style>
