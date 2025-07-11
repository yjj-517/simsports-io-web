// game路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/game",
		name: "game",
		redirect: "/game", //重定向
		component: Layout, //头部导航
		children: [
			{
				name: "game-index",
				path: "/game",
				meta: {
					title: "game-index",
					isRoot: false,
				},
				component: () => import("@/views/game/index.vue"),
			},
			{
				name: "game-simdunk",
				path: "/game/simdunk",
				meta: {
					title: "game-simdunk",
					isRoot: false,
				},
				component: () => import("@/views/simdunk/index.vue"),
			},
		],
	},
];

export default routes;
