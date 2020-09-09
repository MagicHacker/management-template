<template>
  <div class="server-error-wrap">
    <div class="server-error-content">
      <h2>500</h2>
      <div>Internal Server Error</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServerError',
  data() {
    return {}
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.server-error-wrap {
  width: 100%;
  height: 100%;
  background-color: #2089da;
  display: flex;
  justify-content: center;
  align-items: center;
  .server-error-content {
    width: 400px;
    height: 200px;
    font-weight: 500;
    font-size: 20px;
    h2 {
      margin: 0px 0px 10px;
      font-weight: 700;
      color: #fff;
      font-size: 50px;
    }
  }
}
</style>
