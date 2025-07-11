// 竞赛路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/competition",
		name: "competition",
		redirect: "/competition", //重定向
		meta: {
			title: "competition", //名字
			isRoot: false, //路由限制
			menuNum: 5, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "competition_index",
				path: "/competition",
				meta: {
					title: "competition_index",
					isRoot: false,
				},
				component: () => import("@/view/Competition/index.vue"),
			},
		],
	},
];

export default routes;
