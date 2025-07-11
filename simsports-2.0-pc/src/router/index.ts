import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useStores } from "@/store/index"; //store
import { ElMessage } from "element-plus";

const router = createRouter({
	history: createWebHistory(),
	routes,
});

//to表示目标路由 from从什么地方来的路由、对象
//next 进行下一个路由 需要放行
router.beforeEach((to, _from, next) => {
	const useStore = useStores();
	if (to.meta.isRoot) {
		// 判断该路由是否需要登录权限
		if (useStore.userState) {
			next();
		} else {
			ElMessage.warning("Please log in first!");
			next("/user");
		}
	} else {
		next();
	}
});

export default router;
