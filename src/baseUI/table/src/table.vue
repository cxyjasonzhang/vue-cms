<template>
  <div class="table">
    <div class="header">
      <h4>{{ tableName }}</h4>
      <div class="header-handle">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
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
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITableColumns } from '../type'
defineProps({
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
  }
})
// const emits = defineEmits(['getSelectionData'])
// const handleSelectionChange = (value: any) => {
//   console.log(value, 'selection')
//   emits('getSelectionData', value)
// }
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
