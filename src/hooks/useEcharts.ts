import { init, ECharts, EChartsOption } from 'echarts'

export default function (el: HTMLElement) {
  const chartInstance: ECharts = init(el)

  const setOptions = (option: EChartsOption) => {
    chartInstance.setOption(option)
  }

  const updateSize = () => {
    chartInstance.resize()
  }

  window.addEventListener('resize', () => {
    chartInstance.resize()
  })
  return {
    chartInstance,
    setOptions,
    updateSize
  }
}
