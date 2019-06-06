<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-view />
  </div>
</template>

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
</style>
