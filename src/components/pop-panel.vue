<template>
  <div class="pop-wrap">弹框</div>
</template>
<script>
export default {
  name: "PopPanel"
};
</script>
<style lang="scss">
.pop-wrap {
  position: absolute;
  width: 200px;
  height: 200px;
  right: 200px;
  top: 100px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  background-color: #fff;
}
</style>
