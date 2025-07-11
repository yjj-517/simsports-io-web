import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style/reset.css"; // 去除浏览器默认样式
import router from "./router"; //路由
import piniaStore from "./store/index"; // 全局储存pinia

import Vant from "vant"; //vant
import "../node_modules/vant/lib/index.css";

const app = createApp(App);

app.use(router).use(Vant).use(piniaStore);

app.mount("#app");
