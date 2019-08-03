<template>
  <div class="person-wrap">
    <el-card class="person-detail">
      <div>
        <img src="../assets/Belle.jpg" alt />
        <h4>MagicHacker</h4>
      </div>
      <div class="person-connect">
        <h4>Connect:</h4>
        <ul>
          <li>
            <el-row>
              <el-col :span="6">
                <icon-svg symbol="icon-twitter"></icon-svg>
              </el-col>
              <el-col :span="16">xxx</el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="6">
                <icon-svg symbol="icon-facebook"></icon-svg>
              </el-col>
              <el-col :span="16">xxxx</el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="6">
                <icon-svg symbol="icon-instagram"></icon-svg>
              </el-col>
              <el-col :span="16">xxx</el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="6">
                <icon-svg symbol="icon-phone"></icon-svg>
              </el-col>
              <el-col :span="16">xxx</el-col>
            </el-row>
          </li>
        </ul>
      </div>
      <div class="person-about">
        <h4>About:</h4>
        <p>
          I am a web developer and desginer based in Medellín - Colombia, I like
          read books, good music and nature.
        </p>
      </div>
      <div class="person-social">
        <h4>Social:</h4>
        <el-button-group>
          <el-button type="warning">Facebook</el-button>
          <el-button type="primary">Twitter</el-button>
          <el-button type="danger">Gmail</el-button>
        </el-button-group>
      </div>
    </el-card>
    <el-card class="person-setting">
      <h4>资料设置</h4>
      <el-form label-width="80px">
        <el-form-item label="Name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Twitter">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="FaceBook">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Instagram">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "PersonCenter"
};
</script>
<style lang="scss" scoped>
.person-wrap {
  width: 100%;
  position: relative;
  .person-detail {
    width: 50%;
    float: left;
    height: 510px;
    padding: 15px;
    .person-connect {
      text-align: left;
    }
    .person-about {
      text-align: left;
      p {
        margin: 0px;
      }
    }
    .person-social {
      text-align: left;
    }
  }
  .person-setting {
    overflow: hidden;
    height: 510px;
    padding: 15px;
    margin-left: 20px;
  }
}
</style>
