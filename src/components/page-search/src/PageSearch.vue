<template>
  <div>
    <hy-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="btn-group">
          <el-button :icon="Refresh">重置</el-button>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { HyForm } from '@/baseUI/form'
import { types } from '@/baseUI/form'
defineProps({
  searchConfig: {
    type: Object as PropType<types.IForm>,
    required: true
  }
})
const formData = ref({
  name: '',
  password: '',
  userType: '1',
  date: ''
})
</script>

<style lang="less" scoped>
.title {
  color: red;
  text-align: center;
}
.btn-group {
  text-align: right;
  margin: -10px 40px 0 0;
}
</style>
