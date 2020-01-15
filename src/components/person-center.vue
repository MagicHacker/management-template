<template>
  <div class="person-wrap">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div slot="header">
            <span>个人简介</span>
          </div>
          <div class="person-avatar">
            <el-upload
              class="avatar-uploader"
              :show-file-list="false"
              :on-success="handleAvatar"
              action="https://jsonplaceholder.typicode.com/posts/"
            >
              <img v-if="imgUrl" :src="imgUrl" alt />
            </el-upload>
          </div>
          <div class="person-name">
            <span>{{ formData.name }}</span>
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
                <div>{{ formData.twitter }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-facebook"></icon-svg>
                <div>{{ formData.facebook }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-instagram"></icon-svg>
                <div>{{ formData.instagram }}</div>
              </li>
              <li>
                <icon-svg symbol="icon-phone"></icon-svg>
                <div>{{ formData.phone }}</div>
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
              <el-button type="warning" @click="goToFacebook"
                >Facebook</el-button
              >
              <el-button type="primary" @click="goToTwitter">Twitter</el-button>
              <el-button type="danger" @click="goToInstagram"
                >Instagram</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-tabs>
            <el-tab-pane label="Activity">Activity</el-tab-pane>
            <el-tab-pane label="Timeline" class="person-center-timeline">
              <el-timeline>
                <el-timeline-item
                  v-for="(item, index) in timeline"
                  :key="index"
                  placement="top"
                  :type="item.type"
                  :timestamp="item.timestamp"
                >
                  <el-card>
                    <h5>{{ item.title }}</h5>
                    <div>{{ item.content }}</div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </el-tab-pane>
            <el-tab-pane label="Account">
              <el-form
                label-width="80px"
                ref="accountRef"
                :model="formData"
                :rules="rules"
              >
                <el-form-item label="Name" prop="name">
                  <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="Twitter" prop="twitter">
                  <el-input v-model="formData.twitter"></el-input>
                </el-form-item>
                <el-form-item label="FaceBook" prop="facebook">
                  <el-input v-model="formData.facebook"></el-input>
                </el-form-item>
                <el-form-item label="Phone" prop="phone">
                  <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item label="Instagram" prop="instagram">
                  <el-input v-model="formData.instagram"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="submit('accountRef')"
                    v-loading.fullscreen.lock="submitLoading"
                    >提交</el-button
                  >
                  <el-button @click="reset('accountRef')">重置</el-button>
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
      formData: {
        name: "MagicHacker",
        twitter: "",
        facebook: "",
        phone: "",
        instagram: ""
      },
      timeline: [
        {
          timestamp: "2019/4/12",
          title: "提交GitHub",
          content: "zx提交于2019/4/12",
          type: "primary"
        },
        {
          timestamp: "2019/4/8",
          title: "提交GItHub",
          content: "zx提交于2019/4/8",
          type: "primary"
        },
        {
          timestamp: "2019/4/3",
          title: "提交GitHub",
          content: "zx提交于2019/4/3",
          type: "primary"
        }
      ],
      imgUrl: require("../assets/Belle.jpg"),
      submitLoading: false,
      rules: {
        name: [
          {
            required: true,
            message: "输入不能为空",
            trigger: ["blur", "change"]
          }
        ],
        twitter: [
          {
            required: true,
            message: "输入不能为空",
            trigger: ["blur", "change"]
          }
        ],
        facebook: [
          {
            required: true,
            message: "输入不能为空",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            required: true,
            message: "输入不能为空",
            trigger: ["blur", "change"]
          }
        ],
        instagram: [
          {
            required: true,
            message: "输入不能为空",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    handleAvatar(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw);
    },
    // 访问Facebook
    goToFacebook() {
      window.open(`https://${this.facebook}`);
    },
    // 访问Twitter
    goToTwitter() {
      window.open(`https://${this.twitter}`);
    },
    // 访问Instagram
    goToInstagram() {
      window.open(`https://${this.instagram}`);
    },
    // 提交
    submit(refName) {
      this.$refs[refName].validate(valid => {
        if (valid) {
          this.submitLoading = true;
          setTimeout(() => {
            this.submitLoading = false;
            this.$message({
              type: "success",
              message: "提交成功"
            });
          }, 1500);
        } else {
          return false;
        }
      });
    },
    // 重置
    reset(refName) {
      this.$refs[refName].resetFields();
    }
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
  .person-avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    .avatar-uploader {
      width: 100%;
      /deep/ .el-upload {
        width: 100%;
        height: 64px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
  }
  .person-name {
    width: 100%;
    height: 30px;
    color: #333;
    font-weight: 700;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
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
  .person-center-timeline {
    padding-left: 5px;
  }
}
</style>
