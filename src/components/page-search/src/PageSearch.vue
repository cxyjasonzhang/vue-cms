<template>
  <div class="page-search">
    <hy-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="btn-group">
          <el-button :icon="Refresh" @click="handleRefresh">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handlerSearch">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { HyForm, types } from '@/baseUI/form'
const props = defineProps({
  searchConfig: {
    type: Object as PropType<types.IForm>,
    required: true
  }
})
const emits = defineEmits(['handlerSearchClick', 'handlerResetClick'])
const originFormData: any = {}
for (const k of props.searchConfig.formItems) {
  originFormData[k.field] = ''
}
const formData = ref(originFormData)

const handleRefresh = () => {
  // 第一种方式
  // for (const k in originFormData) {
  //   formData.value[k] = ''
  // }
  // 第二种方式(不进行双向绑定)
  formData.value = originFormData
  emits('handlerResetClick')
}

const handlerSearch = () => {
  emits('handlerSearchClick', formData.value)
}
</script>

<style lang="less" scoped>
.page-search {
  background-color: #fff;
  padding: 25px 0 25px 0;
}
.btn-group {
  text-align: right;
  margin: -10px 40px 0 0;
}
</style>
