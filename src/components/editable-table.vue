<template>
  <div class="editable-table-wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'EditableTable',
  data() {
    return {
      tableData: [
        {
          date: '1991-10-21',
          name: '乔予思',
          address: '万和南区4号楼3单元301'
        },
        {
          date: '1991-03-26',
          name: '张轩',
          address: '大拇指小区5号楼302'
        },
        {
          date: '1990-10-08',
          name: '姚美娟',
          address: '汤臣一品'
        }
      ]
    }
  },
  methods: {
    handleEdit() {
      alert('编辑')
    },
    handleDelete() {
      alert('删除')
    }
  }
}
</script>
<style lang="scss" scoped>
.editable-table-wrapper {
  width: 100%;
  height: 100%;
}
</style>
