import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Form,
  FormItem,
  Input,
  ButtonGroup,
  Button,
  Message
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

[Form, FormItem, Input, ButtonGroup, Button].forEach(item => {
  Vue.use(item);
});
Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
