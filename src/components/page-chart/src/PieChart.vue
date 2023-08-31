<template>
  <div>
    <hy-echart :options="option"></hy-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HyEchart from '@/baseUI/HyEchart'
import { EChartsOption } from 'echarts'
import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()
// 通过计算属性 在其数据改变时能获得响应式
const option = computed<EChartsOption>(() => {
  return {
    // title: {
    //   text: 'Referer of a Website',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    // 图例组件
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '45%',
        // 设置饼图圆心位置 第一项是横坐标  第二项纵坐标
        center: ['58%', '54%'],
        right: 0,
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
