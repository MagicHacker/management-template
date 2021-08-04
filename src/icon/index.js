import Vue from 'vue';
import IconSvg from '../components/icon-svg.vue';
// 全局注册图标组件
Vue.component('icon-svg', IconSvg);
// 自动引入svg
const svgs = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(svgs);
