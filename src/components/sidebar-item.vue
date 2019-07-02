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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-dashboard"></icon-svg>
            </el-col>
            <el-col :span="8">首页</el-col>
          </el-row>
        </el-menu-item>
      </router-link>
      <router-link to="/iconPage">
        <el-menu-item index="2">
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#iconi"></icon-svg>
            </el-col>
            <el-col :span="8">图标</el-col>
          </el-row>
        </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-chart"></icon-svg>
            </el-col>
            <el-col :span="8">图表</el-col>
          </el-row>
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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-table"></icon-svg>
            </el-col>
            <el-col :span="8">表格</el-col>
          </el-row>
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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-form"></icon-svg>
            </el-col>
            <el-col :span="8">表单</el-col>
          </el-row>
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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-component"></icon-svg>
            </el-col>
            <el-col :span="8">组件</el-col>
          </el-row>
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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-error"></icon-svg>
            </el-col>
            <el-col :span="8">错误页面</el-col>
          </el-row>
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
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-todo"></icon-svg>
            </el-col>
            <el-col :span="8">Todo Lists</el-col>
          </el-row>
        </el-menu-item>
      </router-link>
      <router-link to="/personCenter">
        <el-menu-item index="9">
          <el-row>
            <el-col :span="8">
              <icon-svg symbol="#icon-person"></icon-svg>
            </el-col>
            <el-col :span="8">个人中心</el-col>
          </el-row>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SideBarItem",
  components: {}
};
</script>
<style lang="scss">
.sidebar-wrap {
  width: 200px;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
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
