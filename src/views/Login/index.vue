<template>
  <div class="wrap">
    <img src="@/assets/img/login-bg.svg" alt="" />
    <div class="login-panel">
      <login-panel></login-panel>
    </div>
  </div>
</template>

<script setup lang="ts">
// 设计如此
import loginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
.wrap {
  img {
    width: 100%;
    height: 100%;
  }
  .login-panel {
    position: fixed;
    left: 50%;
    top: 28%;
    transform: translateX(-50%);
  }
}
</style>
