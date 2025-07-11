// 白皮书路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/whitepaper",
		name: "whitepaper",
		redirect: "/whitepaper", //重定向
		meta: {
			title: "whitepaper", //名字
			isRoot: false, //路由限制
			menuNum: 6, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "whitepaper_index",
				path: "/whitepaper",
				meta: {
					title: "whitepaper_index",
					isRoot: false,
				},
				component: () => import("@/view/Whitepaper/index.vue"),
			},
		],
	},
];

export default routes;
