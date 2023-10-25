<template>
  <div class="department">
    <page-search
      :search-config="searchFormConfig"
      @handler-reset-click="handleResetClick"
      @handler-search-click="handleSearchClick"
    ></page-search>
    <page-content
      :page-content-config="pageContentConfig"
      page-name="department"
      ref="pageContentRef"
      @handleCreateModal="handleCreate"
      @handleEditModal="handleEdit"
    >
    </page-content>
    <page-modal
      :modal-config="modalConfig"
      :modal-title="modelTitle"
      :default-info="defaultInfo"
      ref="modalRef"
      page-name="department"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { searchFormConfig, pageContentConfig } from './config/department.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'
import { usePageSearch } from '@/hooks/usePageSearch'

const { modalRef, defaultInfo, modelTitle, handleCreate, handleEdit } = usePageModal(undefined, undefined)
const { pageContentRef, handleSearchClick, handleResetClick } = usePageSearch()
</script>

<style scoped></style>
