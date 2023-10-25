<!-- 通用表单组件的封装 -->
<template>
  <div class="hy-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row :gutter="20">
        <template v-for="formItem in formItems" :key="formItem.label">
          <el-col v-bind="colLayout" v-if="!formItem.isHidden">
            <el-form-item :label="formItem.label" :rules="formItem.rules" :style="itemStyle">
              <template v-if="formItem.type === 'input'">
                <el-input :placeholder="formItem.placeholder" v-model="valueCom[`${formItem.field}`]" />
              </template>
              <template v-if="formItem.type === 'textarea'">
                <el-input
                  :placeholder="formItem.placeholder"
                  type="textarea"
                  v-model="valueCom[`${formItem.field}`]"
                />
              </template>
              <template v-else-if="formItem.type === 'select'">
                <el-select
                  :placeholder="formItem.placeholder"
                  v-model="valueCom[`${formItem.field}`]"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in formItem.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="formItem.type === 'password'">
                <el-input
                  type="password"
                  v-model="valueCom[`${formItem.field}`]"
                  :placeholder="formItem.placeholder"
                  show-password
                ></el-input>
              </template>
              <template v-else-if="formItem.type === 'datePicker'">
                <el-date-picker
                  type="date"
                  v-model="valueCom[`${formItem.field}`]"
                  :placeholder="formItem.placeholder"
                  style="width: 100%"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFormItem } from '../type'
import { useVModel } from '@/hooks/useVModel'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '5px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
const emits = defineEmits(['update:modelValue'])
const valueCom = useVModel(props, 'modelValue', emits)
</script>

<style lang="less" scoped></style>
