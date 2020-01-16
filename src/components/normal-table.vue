<template>
  <div class="normal-table-wrap">
    <el-table :data="tableData" stripe border>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="salary" label="薪资"></el-table-column>
    </el-table>
    <el-table
      :data="fixedTable"
      border
      stripe
      class="fixed-table-wrap"
      height="400"
    >
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="date" label="生日"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "NormalTable",
  data() {
    return {
      tableData: [
        {
          name: "Johnson",
          age: 28,
          salary: 50000
        },
        {
          name: "Joe",
          age: 28,
          salary: 30000
        },
        {
          name: "Yang",
          age: 26,
          salary: 15000
        }
      ],
      fixedTable: [
        {
          date: "1991-07-08",
          name: "张轩",
          address: "廊坊"
        },
        {
          date: "1991-10-21",
          name: "乔予思",
          address: "廊坊"
        },
        {
          date: "1993-12-27",
          name: "张洋",
          address: "保定"
        },
        {
          date: "1991-05-22",
          name: "薛姝琦",
          address: "廊坊"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.normal-table-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 10px 0px;
  .fixed-table-wrap {
    margin-top: 20px;
  }
}
</style>
