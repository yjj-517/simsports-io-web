// 个人中心路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Account/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/account",
		name: "account",
		redirect: "/account/assets", //重定向
		meta: {
			title: "account", //名字
			isRoot: true, //路由限制
			menuNum: 7, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "account_assets",
				path: "/account/assets",
				meta: {
					title: "account_assets",
					isRoot: true,
				},
				component: () => import("@/view/Account/Assets/index.vue"),
			},
			{
				name: "account_collected",
				path: "/account/collected",
				meta: {
					title: "account_collected",
					isRoot: true,
				},
				component: () => import("@/view/Account/Collected/index.vue"),
			},
			{
				name: "account_activity",
				path: "/account/activity",
				meta: {
					title: "account_activity",
					isRoot: true,
				},
				component: () => import("@/view/Account/Activity/index.vue"),
			},
		],
	},
];

export default routes;
