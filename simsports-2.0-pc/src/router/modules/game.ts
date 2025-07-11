// 游戏路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/game",
		name: "game",
		redirect: "/game", //重定向
		meta: {
			title: "game", //名字
			isRoot: false, //路由限制
			menuNum: 2, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "game_index",
				path: "/game",
				meta: {
					title: "game_index",
					isRoot: false,
				},
				component: () => import("@/view/Game/index.vue"),
			},
		],
	},
];

export default routes;
