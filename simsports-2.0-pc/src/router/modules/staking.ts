// 质押路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/staking",
		name: "staking",
		redirect: "/staking", //重定向
		meta: {
			title: "staking", //名字
			isRoot: false, //路由限制
			menuNum: 4, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "staking_index",
				path: "/staking",
				meta: {
					title: "staking_index",
					isRoot: false,
				},
				component: () => import("@/view/Staking/index.vue"),
			},
		],
	},
];

export default routes;
