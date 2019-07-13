const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  devServer: {
    before: require("./mock")
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("./src/icon"))
      .end();
    config.module
      .rule("icon")
      .test(/\.svg$/)
      .include.add(resolve("./src/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({
        externalConfig: "svgo-config.yml"
      });
  }
};
