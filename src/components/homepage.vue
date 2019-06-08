<template>
  <div class="homepage-wrap">
    <header-item></header-item>
    <sidebar-item></sidebar-item>
    <body-item></body-item>
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
<style lang="scss"></style>
