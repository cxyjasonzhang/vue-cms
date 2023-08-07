<template>
  <div class="role">
    <page-search :search-config="searchFormConfig"></page-search>
    <page-content :page-content-config="pageContentConfig" page-name="role"></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { pageContentConfig, searchFormConfig } from './config/role.config'
</script>

<style scoped></style>
