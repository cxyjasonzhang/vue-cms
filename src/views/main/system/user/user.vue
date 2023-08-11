<template>
  <div class="user">
    <page-search
      :searchConfig="searchFormConfig"
      @handler-search-click="handleSearchClick"
      @handler-reset-click="handleResetClick"
    ></page-search>
    <page-content
      :pageContentConfig="pageContentConfig"
      pageName="users"
      ref="pageContentRef"
      @handleCreateModal="handleCreate"
      @handleEditModal="handleEdit"
    ></page-content>
    <page-modal
      :modal-config="modalConfigRef"
      modal-title="用户新增"
      :defaultInfo="defaultInfo"
      pageName="users"
      ref="modalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig, pageContentConfig } from './config'
import { modalConfig } from './config/model.config'
import { types } from '@/baseUI/form'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useRootStore } from '@/store/root/rootStore'

const rootStore = useRootStore()
const modalConfigRef = computed<types.IForm>(() => {
  const departmentList = rootStore.entireDepartment
  const departmentOptions = departmentList.map((item) => {
    return { label: item.name, value: item.id }
  })
  const roleList = rootStore.entireRole
  const roleOptions = roleList.map((item) => {
    return { label: item.name, value: item.id }
  })

  console.log(roleOptions, departmentOptions, '****')

  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  if (departmentItem) {
    departmentItem.options = departmentOptions
  }
  if (roleItem) {
    roleItem.options = roleOptions
  }
  console.log(modalConfig, 'ssss')

  return modalConfig
})

const { pageContentRef, handleSearchClick, handleResetClick } = usePageSearch()

const hiddenPassword = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  if (passwordItem) {
    passwordItem.isHidden = true
  }
}
const showPassword = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  if (passwordItem) {
    passwordItem.isHidden = false
  }
}
const { modalRef, defaultInfo, handleCreate, handleEdit } = usePageModal(showPassword, hiddenPassword)
</script>
<style lang="less" scoped></style>
