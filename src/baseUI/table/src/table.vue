<template>
  <div class="table">
    <div class="header">
      <h4>{{ tableName }}</h4>
      <div class="header-handle">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :show-overflow-tooltip="true"
      v-loading="tableLoading"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelectColumn" width="60" type="selection" align="center"></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        label="序号"
        width="60"
        type="index"
        align="center"
      ></el-table-column>
      <template v-for="item in tableColumnsConfig" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label" :min-width="item.minWidth" align="center">
          <template #default="scope">
            <!-- 动态设置插槽 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop as string] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:current-page="pageConfig.currentPage"
          v-model:page-size="pageConfig.pagesize"
          :page-sizes="[10, 20, 30]"
          :small="false"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, watch } from 'vue'
import { ITableColumns } from '../type'
const props = defineProps({
  tableData: {
    type: Array as PropType<any[]>,
    required: true
  },
  tableColumnsConfig: {
    type: Array as PropType<ITableColumns[]>,
    required: true
  },
  showSelectColumn: {
    type: Boolean,
    default: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  tableName: {
    type: String,
    default: '用户列表'
  },
  totalPage: {
    type: Number,
    required: true
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pagesize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  tableLoading: {
    type: Boolean,
    default: true
  }
})

// 避免直接使用props eslint会报错
const pageConfig = computed(() => {
  return props.page
})

watch(
  props.tableData,
  (nVal, oVal) => {
    console.log(nVal, oVal, '数据修改')
  },
  { deep: true }
)

const emits = defineEmits(['update:page'])

const handleSizeChange = (size: number) => {
  emits('update:page', { ...props.page, pagesize: size })
}
const handleCurrentChange = (currentPage: number) => {
  emits('update:page', { ...props.page, currentPage })
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: end;
  margin-top: 18px;
}
</style>
