<template>
  <div class="user">
    <page-search :searchConfig="searchFormConfig"></page-search>
    <div class="table-wrap">
      <hy-table :tableColumnsConfig="tableColumnsConfig" :tableData="tableData">
        <template #status="scope">
          <span>{{ scope.row.enable ? '启用' : '禁用' }}</span>
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import hyTable from '@/baseUI/table'
import { searchFormConfig, tableColumnsConfig } from './config'
import { useSystemStore } from '@/store/main/system/system'
const systemStore = useSystemStore()
systemStore.getPageListAction({
  pageUrl: 'users/list',
  queryInfo: {
    offset: 1,
    size: 10
  }
})
const tableData = computed(() => {
  return systemStore.userList
})
</script>

<style lang="less" scoped>
.table-wrap {
  padding: 40px 30px 0 40px;
}
</style>
