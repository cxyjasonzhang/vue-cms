<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ cardTitle }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  cardTitle: {
    type: String,
    required: true
  }
})
</script>

<style lang="less" scoped></style>
