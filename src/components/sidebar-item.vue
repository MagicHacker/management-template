<template>
  <div class="sidebar-wrap">
    <el-menu
      background-color="#7c93aa"
      text-color="#fff"
      active-text-color="#0fecde"
      :unique-opened="true"
    >
      <router-link to="/mainPage">
        <el-menu-item index="1">
          <img src="../assets/svg/dashboard.svg" alt />
          首页
        </el-menu-item>
      </router-link>
      <router-link to="/iconPage">
        <el-menu-item index="2">
          <img src="../assets/svg/icon.svg" alt />
          图标
        </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">
          <img src="../assets/svg/chart.svg" alt />图表
        </template>
        <router-link to="/histogramChart">
          <el-menu-item index="3-1">柱状图</el-menu-item>
        </router-link>
        <router-link to="/lineChart">
          <el-menu-item index="3-2">折线图</el-menu-item>
        </router-link>
        <router-link to="pieChart">
          <el-menu-item index="3-3">饼图</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../assets/svg/table.svg" alt />表格
        </template>
        <router-link to="/normalTable">
          <el-menu-item index="4-1">普通表格</el-menu-item>
        </router-link>
        <router-link to="/editableTable">
          <el-menu-item index="4-2">可编辑表格</el-menu-item>
        </router-link>
        <router-link to="/customizedTable">
          <el-menu-item index="4-3">自定义表格</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img src="../assets/svg/form.svg" alt />表单
        </template>
        <router-link to="/normalForm">
          <el-menu-item index="5-1">普通表单</el-menu-item>
        </router-link>
        <router-link to="/customizedForm">
          <el-menu-item index="5-2">自定义表单</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img src="../assets/svg/component.svg" alt />组件
        </template>
        <router-link to="/componentsList">
          <el-menu-item index="6-1">小组件列表</el-menu-item>
        </router-link>
        <router-link to="/markdown">
          <el-menu-item index="6-2">MarkDown</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <img src="../assets/svg/error.svg" alt />错误页面
        </template>
        <router-link to="/clientError">
          <el-menu-item index="7-1">404</el-menu-item>
        </router-link>
        <router-link to="/serverError">
          <el-menu-item index="7-2">500</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link to="/todoLists">
        <el-menu-item index="8">
          <img src="../assets/svg/todo.svg" alt />
          Todo Lists
        </el-menu-item>
      </router-link>
      <router-link to="/personCenter">
        <el-menu-item index="9">
          <img src="../assets/svg/person.svg" alt />
          个人中心
        </el-menu-item>
      </router-link>
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
