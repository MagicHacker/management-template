<template>
  <div class="homepage-wrap">
    <header-item></header-item>
    <div class="main-wrap">
      <sidebar-item></sidebar-item>
      <div
        class="body-wrap"
        :style="{
          width: `calc(100% - ${bodyLeft}px)`,
          left: bodyLeft + 'px',
        }"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderItem from "./header-item";
import SidebarItem from "./sidebar-item";
import { mapState } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: {
    ...mapState(["sideBarOpen"]),
    bodyLeft() {
      return this.sideBarOpen ? 64 : 200;
    },
  },
  components: {
    HeaderItem,
    SidebarItem,
  },
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
      transition: left 0.28s;
    }
  }
}
</style>
