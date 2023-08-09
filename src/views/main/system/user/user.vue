<template>
  <div class="user">
    <page-search
      :searchConfig="searchFormConfig"
      @handler-search-click="handlerSearchClick"
      @handler-reset-click="handlerResetClick"
    ></page-search>
    <page-content :pageContentConfig="pageContentConfig" pageName="users" ref="pageContentRef"></page-content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig, pageContentConfig } from './config'

const pageContentRef = ref<InstanceType<typeof PageContent> | null>(null)
const handlerSearchClick = (payload: any) => {
  pageContentRef.value?.getPageData(payload)
}
const handlerResetClick = () => {
  pageContentRef.value?.getPageData()
}
</script>

<style lang="less" scoped></style>
