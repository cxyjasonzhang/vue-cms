<template>
  <div class="goods">
    <page-search :search-config="searchFormConfig"></page-search>
    <page-content :page-content-config="pageContentConfig" pageName="goods">
      <template #goodImg="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :z-index="99"
          fit="cover"
          :preview-teleported="true"
        />
      </template>
      <template #oldPrice="scope">
        <span>{{ '￥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '￥' + scope.row.newPrice }}</span>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { searchFormConfig, pageContentConfig } from './config/goods.config'
</script>

<style scoped></style>
