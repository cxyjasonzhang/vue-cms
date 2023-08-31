<template>
  <div>
    <hy-echart :options="option"></hy-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HyEchart from '@/baseUI/HyEchart'
import { graphic, EChartsOption } from 'echarts'

const props = defineProps<{
  xLabels: string[]
  values: number[]
}>()

const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: '渐变色缩放图',
      subtext: ''
    },
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
