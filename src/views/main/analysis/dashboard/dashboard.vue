<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="7">
        <card card-title="商品数量统计">
          <pie-chart :pie-data="pieData"></pie-chart>
        </card>
      </el-col>
      <el-col :span="10">
        <card card-title="各地销量量统计">
          <!-- <hy-echart :options="options"></hy-echart> -->
          <!-- <map-chart :list-data="addressGoodsSale"></map-chart> -->
        </card>
      </el-col>
      <el-col :span="7">
        <card card-title="商品数量统计">
          <rose-chart :rose-data="goodsFavor"></rose-chart>
        </card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <card card-title="商品分类销量统计">
          <line-chart :x-labels="goodsSale.xLabels" :values="goodsSale.values"></line-chart>
        </card>
      </el-col>
      <el-col :span="12">
        <card card-title="各地销量量统计">
          <zoom-column-chart :x-labels="goodsSale.xLabels" :values="goodsSale.values"></zoom-column-chart>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import Card from '@/components/card'
import { PieChart, RoseChart, LineChart, ZoomColumnChart } from '@/components/page-chart'
import { useDashboardStore } from '@/store/main/analysis/dashboard'
const dashboardStore = useDashboardStore()
dashboardStore.getGoodsCountAction() // 请求商品数量
dashboardStore.getGoodsSaleAction() // 每个分类商品的销量
dashboardStore.getGoodsFavorAction() // 请求商品分类统计
dashboardStore.getAddressSaleAction() // 请求地方销量
// 请求分类商品数据
const { categoryGoodsCount, categoryGoodsFavor, categoryGoodsSale, categoryAddressGoodsSale } =
  storeToRefs(dashboardStore)
// 饼图：goodsCount
const pieData = computed(() => {
  return categoryGoodsCount.value.map((item) => ({ name: item.name, value: item.goodsCount }))
})

// 玫瑰图 goodsFavor
const goodsFavor = computed(() => {
  const filterData = categoryGoodsFavor.value.filter((item) => item.goodsFavor)
  return filterData.map((item) => ({ name: item.name, value: item.goodsFavor }))
})
// 折线图  goodsSale
const goodsSale = computed(() => {
  const xLabels: string[] = []
  const values: number[] = []
  categoryGoodsSale.value.forEach((item) => {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  })
  return {
    xLabels,
    values
  }
})

const addressGoodsSale = computed(() => {
  return categoryAddressGoodsSale.value.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style lang="less" scoped></style>
