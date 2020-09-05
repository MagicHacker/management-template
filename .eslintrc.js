module.exports = {
  root: true,
  // 启用node环境
  env: {
    node: true,
  },
  // 继承其他的配置文件，数组的元素都是prettier相应的插件
  // extends: ["plugin:vue/essential", "@vue/prettier"],
  extends: ["attack", "attack/vue", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    // 指定使用babel-eslint作为eslint的解析器
    parser: "babel-eslint",
  },
};
