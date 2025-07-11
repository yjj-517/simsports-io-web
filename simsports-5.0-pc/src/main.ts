import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style/reset.css"; // 去除浏览器默认样式
import router from "./router"; //路由
import ElementPlus from "element-plus"; //ElementPlus
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //icon

const app = createApp(App);
// 全局注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(router).use(ElementPlus);
app.mount("#app");
