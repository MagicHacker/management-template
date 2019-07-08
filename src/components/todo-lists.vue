<template>
  <div class="todo-wrap">
    <h3 class="lists-name">计划列表</h3>
    <div class="add-wrap">
      <h4>添加任务：</h4>
      <div>
        <input type="text" placeholder="回车" @keyup="addTask($event)" />
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <el-card class="list-item">
          <el-checkbox class="list-content">{{ item }}</el-checkbox>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            class="list-button"
            size="mini"
            @click.native="delItem($event, index)"
          ></el-button>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TodoLists",
  data() {
    return {
      todoList: ["Joe", "Johnson", "MagicHacker"]
    };
  },
  methods: {
    addTask(event) {
      let { value } = event.target;
      if (event.keyCode === 13) {
        this.todoList.unshift(value);
        event.target.value = "";
      }
    },
    delItem(event, index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.todo-wrap {
  .lists-name {
    margin: 0px;
    background-color: rgb(218, 76, 66);
    color: #fff;
  }
  .add-wrap {
    width: 700px;
    margin: 0 auto;
    input {
      width: 300px;
      height: 36px;
      border-radius: 5px;
      font-size: 20px;
      outline-color: #fff;
    }
  }
  ul {
    width: 300px;
    margin: 0 auto;
    .list-item {
      width: 100%;
      margin-top: 20px;
      cursor: pointer;
      text-align: left;
      .list-button {
        float: right;
      }
    }
  }
}
</style>
