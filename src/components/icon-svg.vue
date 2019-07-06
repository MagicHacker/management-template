<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: "IconSvg",
  props: ["symbol"],
  computed: {
    iconName() {
      return `#${this.symbol}`;
    }
  }
};
</script>
<style lang="scss"></style>
