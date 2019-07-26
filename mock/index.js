const Mock = require("mockjs"); //mockjs 导入依赖模块
const util = require("./util"); //自定义工具模块
//返回一个函数
module.exports = app => {
  //监听http请求
  app.get("/main-panel", function(req, res) {
    //每次响应请求时读取mock data的json文件
    // const json = util.getJsonFile("./main-panel.json");
    //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    // res.json(Mock.mock(json));
    mockJson(res, "./main-panel.json");
  });
  app.get("/email-panel", (req, res) => {
    mockJson(res, "./email-panel.json");
  });
  app.get("/message-panel", (req, res) => {
    mockJson(res, "./message-panel.json");
  });
  app.get("/task-panel", (req, res) => {
    mockJson(res, "./task-panel.json");
  });
};

const mockJson = (res, jsonFile) => {
  res.json(Mock.mock(util.getJsonFile(jsonFile)));
};
