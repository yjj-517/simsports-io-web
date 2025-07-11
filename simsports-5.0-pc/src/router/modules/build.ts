// build路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/build",
		name: "build",
		redirect: "/build", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "build-index",
				path: "/build",
				meta: {
					title: "build-index",
					isRoot: false,
				},
				component: () => import("@/views/build/index.vue"),
			},
		],
	},
];

export default routes;
