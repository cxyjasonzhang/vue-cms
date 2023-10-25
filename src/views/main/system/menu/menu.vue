<template>
  <div class="menu">
    <page-search :search-config="searchFormConfig"></page-search>
    <page-content
      :page-content-config="pageContentConfig"
      page-name="menu"
      @handle-create-modal="handleCreate"
      @handle-edit-modal="handleEdit"
    >
      <template #icon="scope">
        <el-icon>
          <template v-if="scope.row.icon">
            <component :is="parseIconName(scope.row.icon)"></component>
          </template>
        </el-icon>
      </template>
    </page-content>
    <page-modal
      :modal-config="modalConfig"
      :modal-title="modelTitle"
      :defaultInfo="defaultInfo"
      pageName="menu"
      ref="modalRef"
    >
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { pageContentConfig, searchFormConfig } from './config/menu.config'
import { modalConfig } from './config/modal.config'
import { parseIconName } from '@/utils/format'

import { usePageModal } from '@/hooks/usePageModal'

const { modalRef, defaultInfo, modelTitle, handleCreate, handleEdit } = usePageModal()
</script>

<style scoped></style>
