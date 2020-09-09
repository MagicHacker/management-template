<template>
  <div class="line-main">
    <el-card class="line-chart" shadow="always">
      <div class="chart"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'LineChart',
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    const linechart = this.$echarts.init(document.querySelector('.chart'))
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    }
    linechart.setOption(option)
    window.onresize = () => {
      linechart.resize()
    }
  }
}
</script>
<style lang="scss">
.line-main {
  width: 100%;
  .line-chart {
    margin: 20px 70px;
    .chart {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
