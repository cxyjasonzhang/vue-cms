<template>
  <div>
    <hy-echart :options="option"></hy-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EChartsOption } from 'echarts'
import HyEchart from '@/baseUI/HyEchart'
const props = defineProps<{
  xLabels: string[]
  values: number[]
}>()

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
