<template>
  <div>
    <div class="panel-header">
      <span>任务</span>
      <i class="el-icon-plus right-button"></i>
    </div>
    <div class="panel-body">
      <ul>
        <li v-for="(item, index) in datas" :key="index" class="list-item">
          <p>{{ item.name }}</p>
          <el-Progress :percentage="item.percent"></el-Progress>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskPanel',
  data() {
    return {
      datas: []
    }
  },
  mounted() {
    this.$axios.get('/task-panel').then((res) => {
      this.datas = res.data.datas
    })
  }
}
</script>
<style lang="scss" scoped>
.panel-header {
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  padding: 5px 0px;
  .right-button {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
}
.panel-body {
  width: 100%;
  margin-top: 5px;
  .list-item {
    padding: 5px 0px;
    p {
      margin: 0px;
      font-size: 14px;
    }
  }
}
</style>
