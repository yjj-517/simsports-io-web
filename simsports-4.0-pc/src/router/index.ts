import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
	history: createWebHistory(),
	routes,
});
//to表示目标路由 from从什么地方来的路由、对象
//next 进行下一个路由 需要放行
router.beforeEach((_to, _from, next) => {
	// if (to.meta.title) {
	// 	//显示路由title
	// 	document.title = import.meta.env.VITE_BASE_TITLE + "-" + to.meta.title.toString();
	// }
	next();
});

export default router;
