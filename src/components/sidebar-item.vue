<template>
  <div class="sidebar-wrap">
    <el-menu background-color="#7c93aa" text-color="#fff">
      <el-menu-item index="1">
        <img src="../assets/svg/dashboard.svg" alt />
        首页
      </el-menu-item>
      <el-menu-item index="2">
        <img src="../assets/svg/icon.svg" alt />
        图标
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <img src="../assets/svg/chart.svg" alt />图表
        </template>
        <el-menu-item index="3-1">柱状图</el-menu-item>
        <el-menu-item index="3-2">折线图</el-menu-item>
        <el-menu-item index="3-3">饼图</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../assets/svg/table.svg" alt />表格
        </template>
        <el-menu-item index="4-1">表格1</el-menu-item>
        <el-menu-item index="4-2">表格2</el-menu-item>
        <el-menu-item index="4-3">表格3</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img src="../assets/svg/form.svg" alt />表单
        </template>
        <el-menu-item index="5-1">默认表单</el-menu-item>
        <el-menu-item index="5-2">行内表单</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img src="../assets/svg/component.svg" alt />组件
        </template>
        <el-menu-item index="6-1">组件1</el-menu-item>
        <el-menu-item index="6-2">组件2</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <img src="../assets/svg/error.svg" alt />错误页面
        </template>
        <el-menu-item index="7-1">404</el-menu-item>
        <el-menu-item index="7-2">500</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">
        <img src="../assets/svg/todo.svg" alt />
        Todo Lists
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SideBarItem"
};
</script>
<style lang="scss">
.sidebar-wrap {
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(124, 147, 170);
  font-size: 20px;
  .el-submenu__title i {
    color: #fff;
  }
  ul {
    border: none;
  }
}
</style>
