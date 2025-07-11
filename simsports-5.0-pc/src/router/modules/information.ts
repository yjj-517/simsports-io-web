// 主页路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/information",
		name: "information",
		redirect: "/privacy-policy", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "privacy-policy",
				path: "/privacy-policy",
				meta: {
					title: "privacy-policy",
					isRoot: false,
				},
				component: () => import("@/views/information/privacy-policy/index.vue"),
			},
			{
				name: "terms-of-use",
				path: "/terms-of-use",
				meta: {
					title: "terms-of-use",
					isRoot: false,
				},
				component: () => import("@/views/information/terms-of-use/index.vue"),
			},
		],
	},
];

export default routes;
