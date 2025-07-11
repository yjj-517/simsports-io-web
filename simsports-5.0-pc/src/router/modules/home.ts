// 主页路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/home",
		name: "home",
		redirect: "/home", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "home-index",
				path: "/home",
				meta: {
					title: "home-index",
					isRoot: false,
				},
				component: () => import("@/views/home/index.vue"),
			},
		],
	},
];

export default routes;
