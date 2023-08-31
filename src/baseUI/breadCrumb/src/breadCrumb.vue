<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="crumb in breadCrumbs" :key="crumb.title">
        <el-breadcrumb-item :to="crumb.path">{{ crumb.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { types } from '@/baseUI/breadCrumb'
defineProps({
  breadCrumbs: {
    type: Array as PropType<types.IBreadCrumb[]>
  }
})
</script>

<style lang="less" scoped></style>
