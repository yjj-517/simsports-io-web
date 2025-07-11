// 错误显示路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/exception",
		name: "exception",
		redirect: "/exception/404",
		component: Layout, //头部导航
		children: [
			{
				path: "404",
				name: "exception-404",
				meta: {
					title: "404",
					isRoot: false,
				},
				component: () => import("@/views/exception/404.vue"),
			},
		],
	},
];

export default routes;
