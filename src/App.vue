<script setup lang="ts">
import { useLoginStore } from '@/store/loginStore'
const store = useLoginStore()
store.initLocalData()
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less"></style>
