<template>
  <div class="person-wrap">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>个人简介</span>
          </div>
          <div class="person-avatar">
            <img src="../assets/Belle.jpg" alt />
          </div>
          <div class="person-name">
            <span>{{ name }}</span>
          </div>
          <div class="person-connect">
            <div class="connect-title">
              <icon-svg symbol="icon-connect" class="icon-svg"></icon-svg>
              <div>
                <span>Connect</span>
              </div>
            </div>
            <ul class="connect-list">
              <li>
                <icon-svg symbol="icon-twitter"></icon-svg>
                <div>{{ twitter }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-facebook"></icon-svg>
                <div>{{ facebook }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-instagram"></icon-svg>
                <div>{{ instagram }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-phone"></icon-svg>
                <div>{{ phone }}</div>
              </li>
            </ul>
          </div>
          <div class="person-about">
            <div class="about-title">
              <icon-svg symbol="icon-about" class="icon-svg"></icon-svg>
              <div>
                <span>About</span>
              </div>
            </div>
            <div>
              <span>
                I am a web developer and desginer based in Medellín - Colombia,
                I like read books, good music and nature.
              </span>
            </div>
          </div>
          <div class="person-social">
            <div class="social-title">
              <icon-svg symbol="icon-social" class="icon-svg"></icon-svg>
              <div>
                <span>Social</span>
              </div>
            </div>
            <div class="social-btn">
              <el-button type="warning">Facebook</el-button>
              <el-button type="primary">Twitter</el-button>
              <el-button type="danger">Gmail</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-tabs>
            <el-tab-pane label="Activity">Activity</el-tab-pane>
            <el-tab-pane label="Timeline">Timeline</el-tab-pane>
            <el-tab-pane label="Account">
              <el-form label-width="80px">
                <el-form-item label="Name">
                  <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="Twitter">
                  <el-input v-model="twitter"></el-input>
                </el-form-item>
                <el-form-item label="FaceBook">
                  <el-input v-model="facebook"></el-input>
                </el-form-item>
                <el-form-item label="Phone">
                  <el-input v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="Instagram">
                  <el-input v-model="instagram"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">提交</el-button>
                  <el-button>重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "PersonCenter",
  data() {
    return {
      name: "MagicHacker",
      twitter: "",
      facebook: "",
      phone: "",
      instagram: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.person-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  .person-avatar,
  .person-name {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .person-name {
    height: 30px;
    color: #333;
    font-weight: 700;
    font-size: 16px;
    margin-top: 10px;
  }
  .icon-svg {
    font-size: 12px;
    margin-right: 5px;
  }
  .connect-title,
  .about-title,
  .social-title {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #dfe6ec;
    font-weight: 700;
    color: #606266;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  .person-connect {
    width: 100%;
    .connect-list {
      width: 100%;
      margin-top: 10px;
      li {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        div {
          margin-left: 10px;
        }
      }
    }
  }
  .person-about {
    width: 100%;
  }
  .person-social {
    width: 100%;
    .social-btn {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
  .person-setting {
    overflow: hidden;
    height: 100%;
    padding: 15px;
    margin-left: 20px;
  }
}
</style>
