<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="symbol"></use>
  </svg>
</template>
<script>
export default {
  name: "IconSvg",
  props: ["symbol"]
};
</script>
<style lang="scss"></style>
