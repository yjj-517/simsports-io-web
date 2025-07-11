// governance路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/governance",
		name: "governance",
		redirect: "/governance", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "governance-index",
				path: "/governance",
				meta: {
					title: "governance-index",
					isRoot: false,
				},
				component: () => import("@/views/governance/index.vue"),
			},
		],
	},
];

export default routes;
