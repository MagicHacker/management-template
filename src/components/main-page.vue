<template>
  <div class="mainpage-wrap" :style="{ left: left + 'px' }">
    <el-row type="flex" class="dashboard-card" justify="space-around">
      <el-col :span="5">
        <el-card
          class="email-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>邮件</p>
              <p>{{ mainPanel.emailCount }}</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/email-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="visitor-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>访客</p>
              <p>{{ mainPanel.visitorCount }}</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/visitors.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="message-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>信息</p>
              <p>{{ mainPanel.messageCount }}</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/message-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="task-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>任务</p>
              <p>{{ mainPanel.taskCount }}</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/task-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="line-card" shadow="always">
      <div class="line-chart"></div>
    </el-card>
    <el-row type="flex" justify="space-around">
      <el-col :span="11">
        <el-card shadow="always" class="pie-card">
          <div class="pie-chart"></div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card shadow="always" class="bar-card">
          <div class="bar-chart"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MainPage',
  data() {
    return {
      mainPanel: '',
      excepted: '',
      actual: ''
    }
  },
  computed: {
    ...mapState(['sideBarOpen']),
    // TODO: 待优化
    left() {
      return this.sideBarOpen ? 0 : 1
    }
  },
  created() {},
  // TODO: 待优化
  async mounted() {
    await this.$axios.get('/main-panel').then((res) => {
      this.mainPanel = res.data.data
      this.excepted = res.data.excepted
      this.actual = res.data.actual
    })
    const chart = this.$echarts.init(document.querySelector('.line-chart'))
    const pieChart = this.$echarts.init(document.querySelector('.pie-chart'))
    const barChart = this.$echarts.init(document.querySelector('.bar-chart'))
    const options = {
      legend: {
        type: 'plain',
        data: ['预计', '实际']
      },
      tooltip: {},
      grid: {
        left: '3%',
        right: '3%',
        top: '30px',
        bottom: '20px'
      },
      xAxis: {
        type: 'category',
        data: [
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
          '星期日'
        ]
      },
      yAxis: [
        {
          type: 'value',
          name: '访客数'
        }
      ],
      series: [
        {
          name: '预计',
          type: 'line',
          data: this.excepted
        },
        {
          name: '实际',
          type: 'line',
          data: this.actual
        }
      ]
    }
    const pieOptions = {
      legend: {
        data: ['邮件', '访客', '信息', '任务']
      },
      calculable: true,
      series: [
        {
          type: 'pie',
          radius: [20, 110],
          center: ['50%', '50%'],
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { value: this.mainPanel.emailCount, name: '邮件' },
            { value: this.mainPanel.visitorCount, name: '访客' },
            { value: this.mainPanel.messageCount, name: '信息' },
            { value: this.mainPanel.taskCount, name: '任务' }
          ]
        }
      ]
    }
    const barOptions = {
      legend: {
        data: ['预计', '实际']
      },
      xAxis: {
        type: 'category',
        data: [
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
          '星期日'
        ]
      },
      yAxis: [
        {
          type: 'value',
          name: '访客数'
        }
      ],
      series: [
        {
          name: '预计',
          type: 'bar',
          data: this.excepted
        },
        {
          name: '实际',
          type: 'bar',
          data: this.actual
        }
      ]
    }
    pieChart.setOption(pieOptions)
    chart.setOption(options)
    barChart.setOption(barOptions)
    window.onresize = () => {
      chart.resize()
      pieChart.resize()
      barChart.resize()
    }
    const mainDom = document.querySelector('.mainpage-wrap')
    mainDom.addEventListener(
      'transitionend',
      function () {
        chart.resize()
        pieChart.resize()
        barChart.resize()
      },
      false
    )
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.mainpage-wrap {
  width: 100%;
  transition: left 0.28s;
  ul li {
    display: inline-block;
  }
  .dashboard-card {
    width: 100%;
    font-size: 20px;
    margin-top: 30px;
    p {
      padding: 0px;
      margin: 0px;
    }
    .email-item {
      background-color: #fc8675;
      border-radius: 10px;
    }
    .visitor-item {
      background-color: #5ab6df;
      border-radius: 10px;
    }
    .message-item {
      background-color: #65cea7;
      border-radius: 10px;
    }
    .task-item {
      background-color: #ebc85e;
      border-radius: 10px;
    }
  }
  .line-card {
    margin: 20px 27px;
    border-radius: 5px;
    .line-chart {
      width: 100%;
      height: 350px;
    }
  }
  .pie-card {
    width: 100%;
    .pie-chart {
      width: 100%;
      height: 300px;
    }
  }
  .bar-card {
    width: 100%;
    .bar-chart {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
