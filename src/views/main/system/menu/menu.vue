<template>
  <div class="menu">
    <page-search :search-config="searchFormConfig"></page-search>
    <page-content :page-content-config="pageContentConfig" page-name="menu">
      <template #icon="scope">
        <el-icon>
          <template v-if="scope.row.icon">
            <component :is="parseIconName(scope.row.icon)"></component>
          </template>
        </el-icon>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { pageContentConfig, searchFormConfig } from './config/menu.config'
import { parseIconName } from '@/utils/format'
</script>

<style scoped></style>
