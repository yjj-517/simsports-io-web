import { RouteRecordRaw } from "vue-router";
// 定义模块化路由
export const routeModuleList: RouteRecordRaw[] = [];
// 引入并处理模块化路由
const modules: any = import.meta.glob("./modules/**/*.ts", { eager: true });
Object.keys(modules).forEach(key => {
	const mod = modules[key].default || {};
	const modList = Array.isArray(mod) ? [...mod] : [mod];
	routeModuleList.push(...modList);
});
// 处理所有路由
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home",
	},
	// 嵌套路由
	...routeModuleList,
	{
		path: "/:catchAll(.*)", // 不识别的path自动匹配404
		redirect: "/exception/404",
	},
];

export default routes;
