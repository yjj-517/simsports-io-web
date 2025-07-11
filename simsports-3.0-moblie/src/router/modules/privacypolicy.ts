// 主页路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/privacypolicy",
		name: "privacypolicy",
		redirect: "/privacypolicy", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "privacypolicy-index",
				path: "/privacypolicy",
				meta: {
					title: "privacypolicy-index",
					isRoot: false,
				},
				component: () => import("@/views/privacypolicy/index.vue"),
			},
		],
	},
];

export default routes;
