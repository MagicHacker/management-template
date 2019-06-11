<template>
  <div class="homepage-wrap">
    <header-item></header-item>
    <div class="main-wrap">
      <sidebar-item></sidebar-item>
      <div class="body-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderItem from "./header-item";
import SidebarItem from "./sidebar-item";
export default {
  name: "HomePage",
  components: {
    HeaderItem,
    SidebarItem
  }
};
</script>
<style lang="scss">
.homepage-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  .main-wrap {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    left: 0px;
    top: 50px;
    .body-wrap {
      width: calc(100% - 200px);
      height: 100%;
      position: absolute;
      top: 0px;
      left: 200px;
    }
  }
}
</style>
