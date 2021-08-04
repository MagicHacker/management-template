<template>
  <el-tabs v-model="activeItem" class="icon-wrap">
    <el-tab-pane label="Element-UI Icons" name="first">
      <element-icon></element-icon>
    </el-tab-pane>
    <el-tab-pane label="customized Icons" name="customized">
      <customized-icon></customized-icon>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ElementIcon from './element-icon';
import CustomizedIcon from './customized-icon';
export default {
  name: 'IconPage',
  components: {
    ElementIcon,
    CustomizedIcon,
  },
  data() {
    return {
      activeItem: 'customized',
    };
  },
};
</script>
<style lang="scss">
.icon-wrap {
  padding-left: 15px;
}
</style>
