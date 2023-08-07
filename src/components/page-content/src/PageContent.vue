<template>
  <div>
    <div class="table-wrap">
      <hy-table v-bind="pageContentConfig" :tableData="tableData">
        <template #headerHandler>
          <el-button type="primary" size="medium">新增用户</el-button>
        </template>
        <template #status="scope">
          <el-button :type="scope.row.enable ? 'success' : 'danger'">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
        <template #createTime="scope">
          <span>{{ formatUTCDate(scope.row.createAt) }}</span>
        </template>
        <template #updateTime="scope">
          <span>{{ formatUTCDate(scope.row.updateAt) }}</span>
        </template>
        <template #handle>
          <el-button type="primary" link :icon="Edit">编辑</el-button>
          <el-button type="primary" link :icon="Delete">删除</el-button>
        </template>
        <template #footer>
          <el-pagination
            v-model:current-page="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import hyTable from '@/baseUI/table'
import { Delete, Edit } from '@element-plus/icons-vue'
import { formatUTCDate } from '@/utils/format'
import { useSystemStore } from '@/store/main/system/system'
import { type PageName } from '@/store/main/system/types'
import { ITableData } from '@/baseUI/table/type'

const props = defineProps({
  pageContentConfig: {
    type: Object as PropType<ITableData>,
    required: true
  },
  pageName: {
    type: String as PropType<PageName>,
    required: true
  }
})

const systemStore = useSystemStore()
// 请求表单数据
const getPageData = (payload: any = {}) => {
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: 1,
      size: 10,
      ...payload
    }
  })
}
getPageData()

// 将方法开放出去
defineExpose({
  getPageData
})

// 使用计算属性=>使数据变为响应式
const tableData = computed(() => systemStore.pageListGetter(props.pageName) ?? [])
</script>

<style lang="less" scoped>
.table-wrap {
  padding: 40px 30px 0 40px;
}
</style>
