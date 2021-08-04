<template>
  <div class="pop-wrap">
    <header>
      <el-row>
        <el-col :span="12">{{ popItem.name }}</el-col>
        <el-col :span="7" :offset="5">{{ popItem.time }}</el-col>
      </el-row>
    </header>
    <div class="pop-content">{{ popItem.content }}</div>
  </div>
</template>
<script>
export default {
  name: 'PopPanel',
  props: {
    popItem: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      name: '名字',
      time: '时间',
      content: 'xx'
    }
  }
}
</script>
<style lang="scss">
.pop-wrap {
  width: 100%;
  header {
    background-color: #c7c2c2;
  }
  .pop-content {
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>
