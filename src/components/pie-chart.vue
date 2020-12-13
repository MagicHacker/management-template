<template>
  <div class="peimain">
    <el-card class="piechart" shadow="always">
      <div class="chart"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'PieChart',
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    this.loadChart()
  },
  methods: {
    loadChart() {
      const piechart = this.$echarts.init(document.querySelector('.chart'))
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
      piechart.setOption(option)
      window.onresize = () => {
        piechart.resize()
      }
    }
  }
}
</script>
<style lang="scss">
.peimain {
  width: 100%;
  .piechart {
    margin: 20px 70px;
    .chart {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
