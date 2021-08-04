<template>
  <div class="sidebar-wrap" :style="{ width: sliderWidth + 'px' }">
    <el-menu
      background-color="#7c93aa"
      text-color="#fff"
      active-text-color="#0fecde"
      :unique-opened="true"
      :default-active="routePath"
      :collapse="sideBarOpen"
      :collapse-transition="false"
    >
      <router-link to="/mainPage">
        <el-menu-item index="/mainPage">
          <icon-svg symbol="icon-dashboard"></icon-svg>
          <template v-slot:title>
            <span>首页</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/iconPage">
        <el-menu-item index="/iconPage">
          <icon-svg symbol="icon-icon"></icon-svg>
          <template v-slot:title>
            <span>图标</span>
          </template>
        </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template v-slot:title>
          <icon-svg symbol="icon-chart"></icon-svg>
          <span>图表</span>
        </template>
        <router-link to="/histogramChart">
          <el-menu-item index="/histogramChart">柱状图</el-menu-item>
        </router-link>
        <router-link to="/lineChart">
          <el-menu-item index="/lineChart">折线图</el-menu-item>
        </router-link>
        <router-link to="/pieChart">
          <el-menu-item index="/pieChart">饼图</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="4">
        <template v-slot:title>
          <icon-svg symbol="icon-table"></icon-svg>
          <span>表格</span>
        </template>
        <router-link to="/normalTable">
          <el-menu-item index="/normalTable">普通表格</el-menu-item>
        </router-link>
        <router-link to="/editableTable">
          <el-menu-item index="/editableTable">可编辑表格</el-menu-item>
        </router-link>
        <router-link to="/customizedTable">
          <el-menu-item index="/customizedTable">自定义表格</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="5">
        <template v-slot:title>
          <icon-svg symbol="icon-form"></icon-svg>
          <span>表单</span>
        </template>
        <router-link to="/normalForm">
          <el-menu-item index="/normalForm">普通表单</el-menu-item>
        </router-link>
        <router-link to="/customizedForm">
          <el-menu-item index="/customizedForm">自定义表单</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="6">
        <template v-slot:title>
          <icon-svg symbol="icon-component"></icon-svg>
          <span>组件</span>
        </template>
        <router-link to="/componentsList">
          <el-menu-item index="/componentsList">组件列表</el-menu-item>
        </router-link>
        <router-link to="/markdown">
          <el-menu-item index="/markdown">Markdown</el-menu-item>
        </router-link>
        <router-link to="/richTextEditor">
          <el-menu-item index="/richTextEditor">富文本编辑器</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="7">
        <template v-slot:title>
          <icon-svg symbol="icon-error"></icon-svg>
          <span>错误页面</span>
        </template>
        <router-link to="/clientError">
          <el-menu-item index="/clientError">404</el-menu-item>
        </router-link>
        <router-link to="/serverError">
          <el-menu-item index="/serverError">500</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link to="/todoLists">
        <el-menu-item index="/todoLists">
          <icon-svg symbol="icon-todo"></icon-svg>
          <template v-slot:title>
            <icon-svg symbol="icon-chart"></icon-svg>
            <span>Todo Lists</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/photoWall">
        <el-menu-item index="/photoWall">
          <icon-svg symbol="icon-photo"></icon-svg>
          <template v-slot:title>
            <icon-svg symbol="icon-chart"></icon-svg>
            <span>照片墙</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/personCenter">
        <el-menu-item index="/personCenter">
          <icon-svg symbol="icon-person"></icon-svg>
          <template v-slot:title>
            <icon-svg symbol="icon-chart"></icon-svg>
            <span>个人中心</span>
          </template>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SideBarItem',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['sideBarOpen']),
    sliderWidth() {
      return this.sideBarOpen ? 64 : 200
    },
    routePath() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss">
.sidebar-wrap {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: rgb(124, 147, 170);
  font-size: 20px;
  .el-submenu__title i {
    color: #fff;
  }
  span {
    display: inline-block;
    margin-left: 10px;
  }
  ul {
    border: none;
  }
}
</style>
