<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" :title="modalTitle" width="30%" align-center :destroy-on-close="true">
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCreateClick"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from 'vue'
import { HyForm, types } from '@/baseUI/form'
import { useSystemStore } from '@/store/main/system/system'

const props = defineProps({
  modalTitle: {
    type: String,
    default: ''
  },
  modalConfig: {
    type: Object as PropType<types.IForm>,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})

console.log(props.modalConfig, 'modalConfig')

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
// 将方法开放出去
defineExpose({ showDialog })
const formData = ref<any>({})
watch(
  () => props.defaultInfo,
  (newVal) => {
    // 初始化表单的值
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newVal[`${item.field}`]
    }
  }
)

const systemStore = useSystemStore()
const handleCreateClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    const { id } = props.defaultInfo
    systemStore.updatePageItemAction({
      id,
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  } else {
    // 新建
    systemStore.createPageItemAction({
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}
</script>

<style lang="less" scoped></style>
