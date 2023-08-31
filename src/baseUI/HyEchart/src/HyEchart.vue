<template>
  <div class="base-chart">
    <div ref="chartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '@/hooks/useEcharts'
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const chartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(chartDivRef.value as HTMLElement)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>
