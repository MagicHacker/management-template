<template>
  <div class="homepage-wrap">
    <header-item></header-item>
    <div class="main-wrap">
      <sidebar-item></sidebar-item>
      <body-item></body-item>
    </div>
  </div>
</template>
<script>
import HeaderItem from "./header-item";
import SidebarItem from "./sidebar-item";
import BodyItem from "./body-item";
export default {
  name: "HomePage",
  components: {
    HeaderItem,
    SidebarItem,
    BodyItem
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
  }
}
</style>
