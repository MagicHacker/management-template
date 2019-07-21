<template>
  <div>
    <div class="panel-header">
      <span>通知</span>
      <i class="el-icon-check right-button" @click="checkEmail"></i>
    </div>
    <div class="panel-body">
      <ul>
        <li class="list-item" v-for="(n, index) in 5" :key="index">
          <el-popover placement="bottom" width="200" trigger="click">
            <pop-panel
              :pop-item="{
                name: '名称',
                content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              }"
            ></pop-panel>
            <div slot="reference" class="list-slot">
              <img src="../assets/Belle.jpg" alt />
              <div class="list-content">
                <div class="list-header">
                  <span>David Belle</span>
                </div>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes
                </p>
              </div>
            </div>
          </el-popover>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import PopPanel from "./pop-panel";
export default {
  name: "EmailPanel",
  components: {
    PopPanel
  },
  methods: {
    checkEmail() {
      alert(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.panel-header {
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  padding: 5px 0px;
  .right-button {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
}
.panel-body {
  width: 100%;
  margin-top: 10px;
  .list-item {
    cursor: pointer;
    padding: 5px 0px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .list-slot {
      display: flex;
      .list-content {
        flex: 1;
        min-width: 0;
        margin-left: 10px;
        .list-header {
          font-size: 12px;
          color: #000;
          small {
            float: right;
            font-size: 11px;
          }
        }
        p {
          margin: 2px 0px 0px 0px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
