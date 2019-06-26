module.exports = {
  devServer: {
    before: require("./mock"),
    hotOnly: true
  }
};
