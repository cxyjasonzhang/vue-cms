<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" border>
      <template v-for="item in tableColumnsConfig" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label" :min-width="item.minWidth" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITableColumns } from '../type'
defineProps({
  tableData: {
    type: Array,
    required: true
  },
  tableColumnsConfig: {
    type: Array as PropType<ITableColumns[]>,
    required: true
  }
})
</script>

<style lang="less" scoped></style>
