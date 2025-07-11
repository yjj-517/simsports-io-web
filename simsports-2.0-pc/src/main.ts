import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/reset.css"; // 去除浏览器默认样式
import router from "./router"; //路由
import Carousel3d from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

import piniaStore from "./store/index"; // 全局储存pinia
import ElementPlus from "element-plus"; //ElementPlus
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";

interface IconComponent {
	name: string;
	render(): any;
}
const app = createApp(App);
// 全局注册icon
for (const [name, component] of Object.entries<Record<string, IconComponent>>(ElIcons)) {
	app.component(name, component);
}

app.use(router).use(Carousel3d).use(piniaStore).use(ElementPlus);
app.mount("#app");
