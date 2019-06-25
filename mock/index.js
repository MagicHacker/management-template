const Mock = require("mockjs"); //mockjs 导入依赖模块
const util = require("./util"); //自定义工具模块
//返回一个函数
module.exports = app => {
  //监听http请求
  app.get("/user/userinfo", function(rep, res) {
    //每次响应请求时读取mock data的json文件
    const json = util.getJsonFile("./user-info.json");
    //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });
};
