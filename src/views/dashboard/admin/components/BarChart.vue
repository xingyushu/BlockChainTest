<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['二月', '三月', '四月', '五月', '六月', '七月', '八月'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '公有链',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 20, 31, 54, 52, 40, 45],
          animationDuration
        }, {
          name: '私有链',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [50, 32, 30, 50, 40, 50, 50],
          animationDuration
        }, {
          name: '联盟链',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [40, 30, 30, 50, 70, 50, 50],
          animationDuration
        }]
      })
    }
  }
}
</script>
