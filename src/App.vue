<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {},
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app,
body,
html {
  width: 100%;
  height: 100%;
}
body,
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.icon {
  width: 50px;
  height: 50px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
