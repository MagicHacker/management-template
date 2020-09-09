<template>
  <div class="mainpage-wrap">
    <el-card class="line-card" shadow="always">
      <div class="line-chart"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'HistogramChart',
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    const linechart = this.$echarts.init(document.querySelector('.line-chart'))
    const option = {
      legend: {
        data: ['数据']
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '数据',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
    linechart.setOption(option)
    window.onresize = () => {
      linechart.resize()
    }
    const mainpage = document.querySelector('.mainpage-wrap')
    mainpage.addEventListener('transitionend', function () {
      linechart.resize()
    })
  }
}
</script>
<style lang="scss">
.mainpage-wrap {
  width: 100%;
  transition: left 0.28s;
  .line-card {
    margin: 20px 70px;
    .line-chart {
      width: 100%;
      height: 600px;
    }
  }
}
</style>
