<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-left"></div>
      <div class="login-right">
        <el-form label-width="60px" label-position="left" size="mini" class="login-input">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" show-password></el-input>
          </el-form-item>
          <el-form-item size="medium">
            <el-button size="medium" type="primary" @click="signIn">登录</el-button>
            <el-button size="medium" class="register-button" @click="signUp">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    signIn() {
      if (this.username !== 'admin' || this.password !== 'admin') {
        this.$message({
          message: '用户名或密码不正确',
          type: 'error',
          duration: 1000
        })
      } else {
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 1000
        })
        // 登录跳转
        this.$router.push({ path: 'mainPage' })
      }
    },
    signUp() {
      this.$message({
        message: '开发中，敬请期待',
        duration: 1000
      })
    }
  }
}
</script>
<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  .login-wrap {
    width: 700px;
    height: 400px;
    background-color: #f6f8fa;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 10px #e6e8e9;
    position: relative;
  }
  .login-left {
    width: 380px;
    height: 240px;
    background-image: url('../assets/login-left.png');
    background-repeat: no-repeat;
    position: absolute;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .login-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 35px;
    .login-input {
      width: 240px;
      height: 140px;
      .el-form-item__label {
        color: #000;
        padding: 0px;
        text-align: center;
      }
      .register-button {
        margin-left: 40px;
      }
    }
  }
}
</style>
