<template>
  <div class="table-wrap">
    <hy-table
      v-bind="pageContentConfig"
      :tableData="tableData"
      :table-loading="tableLoading"
      v-model:page="paginationInfo"
      :total-page="pageCount"
    >
      <template #headerHandler>
        <el-button type="primary" size="default" v-if="isCreate" @click="handleCreate">{{
          createButtonName
        }}</el-button>
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
      <template #handle="scope">
        <el-button type="primary" link :icon="Edit" v-if="isUpdate" @click="handleUpdate(scope.row)"
          >编辑</el-button
        >
        <el-button type="primary" link :icon="Delete" v-if="isDelete" @click="showHandleDelete(scope.row)"
          >删除</el-button
        >
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
    <el-dialog v-model="showDeleteDialog" title="提示" width="30%" align-center>
      <div class="dialog-content">
        <el-icon class="icon-style"><WarningFilled /></el-icon>
        <span>是否删除该条数据！</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDeleteDialog = false"> 取消 </el-button>
          <el-button type="primary" @click="confirmDelete"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import hyTable from '@/baseUI/table'
import { Delete, Edit } from '@element-plus/icons-vue'
import { formatUTCDate } from '@/utils/format'
import { usePermission } from '@/hooks/usePermission'
import { useSystemStore } from '@/store/main/system/system'
import { type PageName } from '@/store/main/system/types'
import { ITableData } from '@/baseUI/table/type'
import { storeToRefs } from 'pinia'

const showDeleteDialog = ref<boolean>(false)

const props = defineProps({
  pageContentConfig: {
    type: Object as PropType<ITableData>,
    required: true
  },
  pageName: {
    type: String as PropType<PageName>,
    required: true
  },
  createButtonName: {
    type: String,
    default: '新增'
  }
})
// 其他特殊插槽
const otherPropSlots = computed<any>(() => {
  return props.pageContentConfig.tableColumnsConfig.filter((item) => {
    if (item.slotName) {
      if (
        item.slotName === 'status' ||
        item.slotName === 'createTime' ||
        item.slotName === 'updateTime' ||
        item.slotName === 'handle'
      ) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  })
})

// 获取按钮操作权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isQuery = usePermission(props.pageName, 'query')
const isDelete = usePermission(props.pageName, 'delete')

const paginationInfo = ref({
  currentPage: 1,
  pagesize: 10
})

watch(paginationInfo, (val) => {
  console.log(val, '分页数据改变')
  getPageData()
})

const emits = defineEmits(['handleCreateModal', 'handleEditModal'])

// 新增、删除、编辑操作
const handleCreate = () => {
  // 去打开弹窗
  emits('handleCreateModal')
}

const handleUpdate = (item: any) => {
  emits('handleEditModal', item)
}

const systemStore = useSystemStore()
let currentGood: any = null
const { isLoading: tableLoading } = storeToRefs(systemStore)

const showHandleDelete = (item: any) => {
  currentGood = item
  // 增加删除提示
  showDeleteDialog.value = true
}

const confirmDelete = () => {
  showDeleteDialog.value = false
  systemStore.deletePageItemAction({
    pageName: props.pageName,
    id: currentGood.id
  })
}

// 请求表单数据
const getPageData = (payload: any = {}) => {
  // 没有查询权限就不请求数据
  if (isQuery) {
    systemStore.getPageListAction({
      pageName: props.pageName,
      queryInfo: {
        offset: (paginationInfo.value.currentPage - 1) * paginationInfo.value.pagesize,
        size: paginationInfo.value.pagesize,
        ...payload
      }
    })
  }
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
  padding: 40px 30px 80px 40px;
  margin-top: 15px;
  background-color: #fff;
}
.dialog-content {
  display: flex;
  align-items: center;
  .icon-style {
    font-size: 25px;
    margin-right: 10px;
    color: #ffba00;
  }
}

:deep(.el-dialog__body) {
  padding: 20px 30px;
}
</style>
