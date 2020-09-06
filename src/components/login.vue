<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-left"></div>
      <div class="login-right">
        <el-form
          label-width="60px"
          label-position="left"
          size="mini"
          class="login-input"
        >
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" show-password></el-input>
          </el-form-item>
          <el-form-item size="medium">
            <el-button size="medium" @click="signIn">登录</el-button>
            <el-button size="medium" class="register-button" @click="signUp"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "admin",
    };
  },
  methods: {
    signIn() {
      if (this.username !== "admin" || this.password !== "admin") {
        this.$message({
          message: "用户名或密码不正确",
          type: "error",
          duration: 1000,
        });
      } else {
        this.$message({
          message: "登录成功",
          type: "success",
          duration: 1000,
        });
        // 登录跳转
        this.$router.push({ path: "mainPage" });
      }
    },
    signUp() {
      this.$message({
        message: "开发中，敬请期待",
        duration: 1000,
      });
    },
  },
};
</script>
<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("../assets/login-bg.png");
  background-size: 100%;
  .login-wrap {
    position: absolute;
    width: 686px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin: -150px 0px 0px -348px;
  }
  .login-left {
    width: 50%;
    height: 100%;
    background-image: url("../assets/login-left.png");
    background-repeat: no-repeat;
    float: left;
  }
  .login-right {
    width: 50%;
    height: 100%;
    position: relative;
    background-color: rgb(206, 90, 90);
    float: left;
    .login-input {
      width: 240px;
      height: 140px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -70px 0px 0px -120px;
      .el-form-item__label {
        color: #fff;
      }
      .register-button {
        margin-left: 40px;
      }
    }
  }
}
</style>
