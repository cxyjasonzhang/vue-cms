<template>
  <div class="role">
    <page-search :search-config="searchFormConfig"></page-search>
    <page-content
      :page-content-config="pageContentConfig"
      page-name="role"
      createButtonName="新增角色"
      @handleCreateModal="handleCreate"
      @handleEditModal="handleEdit"
    ></page-content>
    <page-modal
      :modal-config="modalConfig"
      :modal-title="modelTitle"
      :default-info="defaultInfo"
      :other-info="otherInfo"
      ref="modalRef"
      page-name="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="treeMenu"
          show-checkbox
          node-key="id"
          :highlight-current="true"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { menuMapLeafKeys } from '@/utils/map-menu'

import { ElTree } from 'element-plus'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { pageContentConfig, searchFormConfig } from './config/role.config'
import { modalConfig } from './config/model.config'

import { usePageModal } from '@/hooks/usePageModal'

import { useRootStore } from '@/store/root/rootStore'

const rootStore = useRootStore()
const { entireMenu: treeMenu } = storeToRefs(rootStore)
const elTreeRef = ref<InstanceType<typeof ElTree>>()

const editCallback = (item: any) => {
  const keys = menuMapLeafKeys(item.menuList)

  nextTick(() => {
    // elTreeRef.value!.setCheckedKeys(keys, false)
    elTreeRef.value && elTreeRef.value.setCheckedKeys(keys, false)
  })
}

const { modalRef, defaultInfo, modelTitle, handleCreate, handleEdit } = usePageModal(undefined, editCallback)

const otherInfo = ref()
const handleCheckChange = (_: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
  console.log(otherInfo.value, 'value')
}
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 63px;
}
</style>
