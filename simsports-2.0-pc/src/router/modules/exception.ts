// 错误显示路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/exception",
		name: "exception",
		redirect: "/exception/404",
		meta: {
			title: "exception",
			isRoot: false,
		},
		component: Layout, //头部导航
		children: [
			{
				path: "404",
				name: "exception-404",
				meta: {
					title: "404",
					isRoot: false,
				},
				component: () => import("@/view/Exception/404.vue"),
			},
		],
	},
];

export default routes;
