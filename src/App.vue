<script setup lang="ts">
import { useLoginStore } from '@/store/loginStore'
const store = useLoginStore()
store.initLocalData()
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>
