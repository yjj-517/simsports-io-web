import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
	history: createWebHistory(),
	routes,
});
//to表示目标路由 from从什么地方来的路由、对象
//next 进行下一个路由 需要放行
router.beforeEach((to, _from, next) => {
	// 解决路由跳转不在顶部的问题
	window.scroll(0, 0);
	if (to.meta.isRoot) {
		// 判断该路由是否需要登录权限
		next();
	} else {
		next();
	}
});

export default router;
