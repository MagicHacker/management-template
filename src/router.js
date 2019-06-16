import Vue from "vue";
import Router from "vue-router";
import Login from "./components/login.vue";
import HomePage from "./components/homepage.vue";
import IconPage from "./components/icon-page.vue";
import HistogramChart from "./components/histogram-chart.vue";
import LineChart from "./components/line-chart.vue";
import PieChart from "./components/pie-chart.vue";
import NormalTable from "./components/normal-table.vue";
import EditableTable from "./components/editable-table.vue";
import CustomizedTable from "./components/customized-table.vue";
import NormalForm from "./components/normal-form.vue";
import CustomizedForm from "./components/customized-form.vue";
import ComponentsList from "./components/components-list.vue";
import MarkdownItem from "./components/markdown-item.vue";
import ClientError from "./components/client-error.vue";
import ServerError from "./components/server-error.vue";
import TodoLists from "./components/todo-lists.vue";
import MainPage from "./components/main-page.vue";
import PersonCenter from "./components/person-center.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/homepage",
      name: "homepage",
      component: HomePage,
      children: [
        {
          path: "/mainPage",
          component: MainPage
        },
        {
          path: "/iconPage",
          component: IconPage
        },
        {
          path: "/histogramChart",
          component: HistogramChart
        },
        {
          path: "/lineChart",
          component: LineChart
        },
        {
          path: "/pieChart",
          component: PieChart
        },
        {
          path: "/normalTable",
          component: NormalTable
        },
        {
          path: "/editableTable",
          component: EditableTable
        },
        {
          path: "/customizedTable",
          component: CustomizedTable
        },
        {
          path: "/normalForm",
          component: NormalForm
        },
        {
          path: "/customizedForm",
          component: CustomizedForm
        },
        {
          path: "/componentsList",
          component: ComponentsList
        },
        {
          path: "/markdown",
          component: MarkdownItem
        },
        {
          path: "/clientError",
          component: ClientError
        },
        {
          path: "/serverError",
          component: ServerError
        },
        {
          path: "/todoLists",
          component: TodoLists
        },
        {
          path: "/personCenter",
          component: PersonCenter
        }
      ]
    },
    {
      path: "",
      name: "",
      component: Login
    }
  ]
});
