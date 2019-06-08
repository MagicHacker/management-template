<template>
  <div class="header-wrap">
    <div class="header-left">
      <ul>
        <li>
          <span>管理系统模板</span>
        </li>
        <li>
          <img src="../assets/svg/hamburger.svg" />
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul>
        <li>
          <el-badge :value="3">
            <img src="../assets/svg/email.svg" alt />
          </el-badge>
        </li>
        <li>
          <el-badge :value="3">
            <img src="../assets/svg/bell.svg" alt />
          </el-badge>
        </li>
        <li>
          <el-badge :value="3">
            <img src="../assets/svg/tasks.svg" alt />
          </el-badge>
        </li>
        <li>
          <el-badge :value="3">
            <img src="../assets/svg/palette.svg" alt />
          </el-badge>
        </li>
        <li>
          <el-dropdown trigger="click" placement="bottom">
            <img src="../assets/svg/person.svg" alt />
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>项目地址</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderItem"
};
</script>
<style lang="scss">
.header-wrap {
  width: 100%;
  height: 50px;
  background-color: rgb(100, 123, 148);
  ul {
    height: 100%;
  }
  ul li {
    display: inline-block;
    cursor: pointer;
  }
  .header-left {
    float: left;
    height: 100%;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    li:nth-child(1) {
      width: 200px;
    }
    li:nth-child(2) img {
      vertical-align: middle;
    }
  }
  .header-right {
    float: right;
    height: 100%;
    ul li {
      width: 90px;
      height: 100%;
      line-height: 10px;
    }
    ul li:last-child {
      line-height: 50px;
    }
    ul li:last-child img {
      vertical-align: -7px;
    }
  }
}
</style>
