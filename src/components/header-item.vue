<template>
  <div class="header-wrap">
    <div class="header-left" @click="toggleSideBar">
      <el-tooltip effect="dark" content="菜单栏收缩" placement="bottom">
        <img src="../assets/svg/hamburger.svg" />
      </el-tooltip>
    </div>
    <div class="header-right">
      <ul>
        <li v-popover:emailPop>
          <el-tooltip effect="dark" content="邮件" placement="bottom">
            <el-badge :value="dataBadge.emailBadge" :max="99">
              <img src="../assets/svg/email.svg" alt />
            </el-badge>
          </el-tooltip>
        </li>
        <li v-popover:messagePop>
          <el-tooltip effect="dark" content="信息" placement="bottom">
            <el-badge :value="dataBadge.messageBadge" :max="99">
              <img src="../assets/svg/bell.svg" alt />
            </el-badge>
          </el-tooltip>
        </li>
        <li v-popover:tasksPop>
          <el-tooltip effect="dark" content="任务" placement="bottom">
            <el-badge :value="dataBadge.taskBadge" :max="99">
              <img src="../assets/svg/tasks.svg" alt />
            </el-badge>
          </el-tooltip>
        </li>
        <li v-popover:colorPop class="palette-item">
          <el-tooltip effect="dark" content="调色板" placement="bottom">
            <el-color-picker v-model="color" size="small" :predefine="predefineColors"></el-color-picker>
          </el-tooltip>
        </li>
        <li v-popover:personPop>
          <el-tooltip effect="dark" content="个人中心" placement="bottom">
            <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
              <img src="../assets/svg/person.svg" alt />
              <el-dropdown-menu>
                <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
                <el-dropdown-item command="mainpage">首页</el-dropdown-item>
                <el-dropdown-item command="projectAddress">项目地址</el-dropdown-item>
                <el-dropdown-item divided command="signOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-tooltip>
        </li>
      </ul>
    </div>
    <el-popover ref="emailPop" placement="bottom" trigger="click" width="300">
      <email-panel></email-panel>
    </el-popover>
    <el-popover ref="messagePop" placement="bottom" trigger="click" width="300">
      <message-panel></message-panel>
    </el-popover>
    <el-popover ref="tasksPop" placement="bottom" trigger="click" width="300">
      <task-panel></task-panel>
    </el-popover>
  </div>
</template>
<script>
import EmailPanel from "./email-panel";
import MessagePanel from "./message-panel";
import TaskPanel from "./task-panel";
export default {
  name: "HeaderItem",
  data() {
    return {
      dataBadge: "",
      color: "#FF8C00",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577"
      ],
      sideBarOpen: false
    };
  },
  mounted() {
    this.$axios.get("/badge").then(res => {
      this.dataBadge = res.data.data;
    });
  },
  components: {
    EmailPanel,
    MessagePanel,
    TaskPanel
  },
  methods: {
    toggleSideBar() {
      alert(1);
      this.sideBarOpen = !this.sideBarOpen;
    },
    handleCommand(command) {
      switch (command) {
        case "personalCenter":
          this.$router.push({ path: "personCenter" });
          break;
        case "mainpage":
          this.$router.push({ path: "mainpage" });
          break;
        case "projectAddress":
          window.open("https://github.com/MagicHacker/management-template");
          break;
        case "signOut":
          this.$router.push({ path: "login" });
          break;
      }
    }
  }
};
</script>
<style lang="scss">
.header-wrap {
  width: 100%;
  height: 50px;
  background-color: rgb(100, 123, 148);
  position: relative;
  ul {
    height: 100%;
  }
  ul li {
    display: inline-block;
    cursor: pointer;
  }
  .header-left {
    position: absolute;
    left: 200px;
    top: 10px;
    cursor: pointer;
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
    .palette-item {
      vertical-align: -10px;
    }
  }
}
</style>
