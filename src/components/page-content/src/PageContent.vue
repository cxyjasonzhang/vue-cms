<template>
  <div class="table-wrap">
    <hy-table
      v-bind="pageContentConfig"
      :tableData="tableData"
      v-model:page="paginationInfo"
      :total-page="pageCount"
    >
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
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import hyTable from '@/baseUI/table'
import { Delete, Edit } from '@element-plus/icons-vue'
import { formatUTCDate } from '@/utils/format'
import { useSystemStore } from '@/store/main/system/system'
import { type PageName } from '@/store/type'
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

const paginationInfo = ref({
  currentPage: 1,
  pagesize: 10
})

// 其他特殊插槽
const otherPropSlots = props.pageContentConfig.tableColumnsConfig.filter((item) => {
  if (item.slotName) {
    if (item.slotName === 'status' || item.slotName === 'createTime' || item.slotName === 'updateTime') {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
})

watch(paginationInfo, () => {
  getPageData()
})

const systemStore = useSystemStore()
// 请求表单数据
const getPageData = (payload: any = {}) => {
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: (paginationInfo.value.currentPage - 1) * paginationInfo.value.pagesize,
      size: paginationInfo.value.pagesize,
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
const pageCount = computed(() => systemStore.pageCountGetter(props.pageName) ?? 0)
</script>

<style lang="less" scoped>
.table-wrap {
  padding: 40px 30px 0 40px;
}
</style>
