<template>
  <div class="mainpage-wrap">
    <el-row type="flex" class="dashboard-card" justify="space-around">
      <el-col :span="5">
        <el-card
          class="email-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>邮件</p>
              <p>23,232</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/email-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="visitor-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>访客</p>
              <p>123</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/visitors.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="message-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>信息</p>
              <p>123</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/message-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card
          class="task-item"
          shadow="always"
          :body-style="{ color: '#fff' }"
        >
          <el-row>
            <el-col :span="12">
              <p>任务</p>
              <p>123</p>
            </el-col>
            <el-col :span="12">
              <img src="../assets/svg/task-item.svg" alt />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <div class="all-line"></div>
    <ul>
      <li class="show-item"></li>
      <li class="show-item"></li>
    </ul>
    <ul>
      <li class="list-item"></li>
      <li class="list-item"></li>
      <li class="list-item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MainPage"
};
</script>
<style lang="scss" scoped>
.mainpage-wrap {
  width: 100%;
  ul li {
    display: inline-block;
  }
  .dashboard-card {
    width: 100%;
    font-size: 20px;
    margin-top: 30px;
    p {
      padding: 0px;
      margin: 0px;
    }
    .email-item {
      background-color: #fc8675;
      border-radius: 10px;
    }
    .visitor-item {
      background-color: #5ab6df;
      border-radius: 10px;
    }
    .message-item {
      background-color: #65cea7;
      border-radius: 10px;
    }
    .task-item {
      background-color: #ebc85e;
      border-radius: 10px;
    }
  }
}
</style>
