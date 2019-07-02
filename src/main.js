import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import "./icon/iconfont";
import {
  Form,
  FormItem,
  Input,
  ButtonGroup,
  Button,
  Message,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Popover,
  Card,
  Progress,
  ColorPicker,
  Row,
  Col
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import IconSvg from "./components/icon-svg.vue";
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");
const Echarts = require("echarts/lib/echarts");
Vue.config.productionTip = false;

[
  Form,
  FormItem,
  Input,
  ButtonGroup,
  Button,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Popover,
  Card,
  Progress,
  ColorPicker,
  Row,
  Col
].forEach(item => {
  Vue.use(item);
});
Vue.prototype.$echarts = Echarts;
Vue.prototype.$message = Message;
Vue.prototype.$axios = Axios;
// 全局注册图标组件
Vue.component("icon-svg", IconSvg);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
