// 主页路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/home",
		name: "home",
		redirect: "/home", //重定向
		meta: {
			title: "home", //名字
			isRoot: false, //路由限制
			menuNum: 1, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "home_index",
				path: "/home",
				meta: {
					title: "home_index",
					isRoot: false,
				},
				component: () => import("@/view/Home/index.vue"),
			},
		],
	},
];

export default routes;
